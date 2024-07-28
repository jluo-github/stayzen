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
console.log('formData: ', formData);
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
  } catch (error:any) {
    return getError(error);
  }
  redirect("/");
};
