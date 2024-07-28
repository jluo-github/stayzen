import * as z from "zod";
import { ZodSchema } from "zod";

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name must contain at least 1 characters " })
    .max(20, { message: "First name must be less than 20 characters" }),
  lastName: z
    .string()
    .min(1, { message: "Last name must contain at least 1 characters " })
    .max(20, { message: "Last name must be less than 20 characters" }),
  username: z
    .string()
    .min(1, { message: "Username name must contain at least 1 characters " })
    .max(20, { message: "Username name must be less than 20 characters" }),
});

// validate data with zod
export function validateWithZod<T>(schema: ZodSchema<T>, data: unknown): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(", "));
  }
  return result.data;
}

// validate image file schema
export const imageSchema = z.object({ image: validateFile() });

// validate file type and size for image
export function validateFile() {
  const maxUploadSize = 1024 * 1024 * 2; // 2MB
  const acceptedFileTypes = ["image/"];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, "File size must be less than 2MB")
    .refine((file) => {
      return (
        !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
      );
    }, "File type must be an image");
}

// validate property schema
export const propertySchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "name must be at least 1 characters.",
    })
    .max(100, {
      message: "name must be less than 100 characters.",
    }),
  tagline: z
    .string()
    .min(1, {
      message: "tagline must be at least 1 characters.",
    })
    .max(100, {
      message: "tagline must be less than 100 characters.",
    }),
  price: z.coerce.number().int().min(0, {
    message: "price must be a positive number.",
  }),
  category: z.string(),
  // description: z
  //   .string()
  //   .min(1, {
  //     message: "description must be at least 1 characters.",
  //   })
  //   .max(1000, {
  //     message: "description must be less than 1000 characters.",
  //   }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 1 && wordCount <= 300;
    },
    {
      message: "description must be between 1 and 300 words.",
    }
  ),
  country: z.string(),
  guests: z.coerce.number().int().min(0, {
    message: "guest amount must be a positive number.",
  }),
  bedrooms: z.coerce.number().int().min(0, {
    message: "bedrooms amount must be a positive number.",
  }),
  beds: z.coerce.number().int().min(0, {
    message: "beds amount must be a positive number.",
  }),
  baths: z.coerce.number().int().min(0, {
    message: "bahts amount must be a positive number.",
  }),
  amenities: z.string(),
});
