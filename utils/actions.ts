"use server";

import { profileSchema, validateWithZod } from "./schemas";
import db from "./db";
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { ZodSchema } from "zod";
import { get } from "http";

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
  if (!user) throw new Error("User not logged in");
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
    const user = await getAuthUser();
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
    return { message: `Profile created!` };
  } catch (error: any) {
    return getError(error);
  } finally {
    // Redirect to the profile page after profile creation
    redirect("/profile");
  }
};


// fetch the profile image
export const fetchProfileImage = async () => {
  // Get the current user from clerk
  const user = await getAuthUser();

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
export const fetchProfile = async () => {
  const user = await getAuthUser();

  const profile = await db.profile.findUnique({
    where: { clerkId: user.id },
  });

  if (!profile) return redirect("/profile/create");
  return profile;
};

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
