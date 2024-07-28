import { createClient } from "@supabase/supabase-js";

const bucket = "stayzen";

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey);

// upload image to supabase
export const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  // image name
  const newName = `${timestamp}-${image.name}`;
  // upload image
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(newName, image, { cacheControl: "3600" });
  // check for error
  if (!data) throw new Error("Image upload failed");
  // return the public url
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};
