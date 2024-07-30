"use server";

import {
  imageSchema,
  profileSchema,
  propertySchema,
  validateWithZod,
} from "./schemas";
import db from "./db";
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { ZodSchema } from "zod";
import { uploadImage } from "./supabase";

// error helper function
const getError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : "An error occurred",
  };
};

// get the current user from clerk
export const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("User not logged in");
  }
  if (!user.privateMetadata.hasProfile) redirect("/profile/create");
  return user;
};

// Creates a new profile .
export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    // Get the current user from clerk
    const user = await currentUser();
    if (!user) throw new Error("Please login to create a profile");
    if (user?.privateMetadata?.hasProfile) redirect("/");

    // console.log(user);
    //get user input
    const rawData = Object.fromEntries(formData);
    // Validate the user input
    const validatedData = validateWithZod(profileSchema, rawData);

    // Create a profile for the user
    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        ...validatedData,
      },
    });
    // Update user metadata to indicate profile creation
    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });

    // Revalidate the path to trigger profile update
    revalidatePath("profile");
    // return { message: `Profile created!` };
  } catch (error: any) {
    return {
      message: error instanceof Error ? error.message : "An error occurred",
    };
  }
  redirect("/");
};

// fetch the profile image
export const fetchProfileImageAction = async () => {
  // Get the current user from clerk
  const user = await currentUser();
  if (!user) return null;

  // Fetch the profile image
  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
    select: {
      profileImage: true,
    },
  });
  return profile?.profileImage;
};

// fetch the profile
export const fetchProfileAction = async () => {
  const user = await getAuthUser();

  const profile = await db.profile.findUnique({
    where: { clerkId: user.id },
  });

  if (!profile) return redirect("/profile/create");
  return profile;
};

// update the profile
export const updateProfileAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  // Get the current user
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);

    const validatedData = validateWithZod(profileSchema, rawData);
    // console.log(validatedData);

    await db.profile.update({
      where: { clerkId: user.id },
      data: validatedData,
    });

    revalidatePath("profile");
    return { message: "Profile updated successfully" };
  } catch (error) {
    return getError(error);
  }
};

// update the profile image
export const updateProfileImageAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  try {
    const image = formData.get("image") as File;
    const validatedData = validateWithZod(imageSchema, { image });
    // get the path of the image
    const fullPath = await uploadImage(validatedData.image);
    // update the profile image
    await db.profile.update({
      where: { clerkId: user.id },
      data: { profileImage: fullPath },
    });
    revalidatePath("/profile");
    return { message: "Profile image updated successfully" };
  } catch (error) {
    return getError(error);
  }
};

// create a new property
export const createPropertyAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  console.log("formData: ", formData);
  try {
    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;

    const validatedData = validateWithZod(propertySchema, rawData);

    const validatedFile = validateWithZod(imageSchema, { image: file });

    const fullPath = await uploadImage(validatedFile.image);

    await db.property.create({
      data: {
        ...validatedData,
        image: fullPath,
        profileId: user.id,
      },
    });
  } catch (error: any) {
    return getError(error);
  }
  redirect("/");
};

// fetch properties:
export const fetchPropertiesAction = async ({
  search = "",
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const properties = await db.property.findMany({
    where: {
      category,
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { tagline: { contains: search, mode: "insensitive" } },
      ],
    },
    select: {
      id: true,
      name: true,
      tagline: true,
      country: true,
      image: true,
      price: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return properties;
};

// fetch property details
export const fetchPropertyDetailsAction = async (id: string) => {
  // Fetch the property by id
  return await db.property.findUnique({
    where: { id },
    include: { profile: true },
  });
};

// fetch favorite
export const fetchFavoriteIdAction = async ({
  propertyId,
}: {
  propertyId: string;
}) => {
  // Get the current user
  const user = await getAuthUser();

  // Fetch the favorite by propertyId and user id
  const favorite = await db.favorite.findFirst({
    where: {
      propertyId,
      profileId: user.id,
    },
    select: {
      id: true,
    },
  });

  return favorite?.id || null;
};

// toggle favorite
export const toggleFavoriteAction = async (prevState: {
  propertyId: string;
  favoriteId: string | null;
  pathname: string;
}) => {
  // Get the current user
  const user = await getAuthUser();
  const { propertyId, favoriteId, pathname } = prevState;

  // toggle the favorite in the database
  try {
    if (favoriteId) {
      // Remove the favorite
      await db.favorite.delete({
        where: { id: favoriteId },
      });
    } else {
      // Add the favorite
      await db.favorite.create({
        data: {
          propertyId,
          profileId: user.id,
        },
      });
    }
    revalidatePath(pathname);
    return { message: favoriteId ? "Favorite removed" : "Favorite added" };
  } catch (error) {
    return getError(error);
  }
};

// fetch favorites
export const fetchFavoritesAction = async () => {
  const user = await getAuthUser();

  // Fetch the favorites by user id
  const favorites = await db.favorite.findMany({
    where: {
      profileId: user.id,
    },
    // get connected property
    select: {
      property: {
        select: {
          id: true,
          name: true,
          tagline: true,
          price: true,
          country: true,
          image: true,
        },
      },
    },
  });
  return favorites.map((favorite) => favorite.property);
};
