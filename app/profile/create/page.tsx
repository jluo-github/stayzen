
import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";
import { createProfileAction } from "@/utils/actions";
import FormContainer from "@/components/form/FormContainer";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CreateProfilePage = async () => {
  // Get the current user from clerk
  const user = await currentUser();
  if (user?.privateMetadata?.hasProfile) redirect("/profile");

  console.log("currentUser", currentUser);
  return (
    <>
      <h2 className='mb-8'>New User</h2>
      <div className='border rounded-md p-8'>
        {/* form */}
        <FormContainer action={createProfileAction}>
          <div className='grid gap-4 mt-4 md:grid-cols-2'>
            <FormInput name='firstName' type='text' label='First Name' />
            <FormInput type='text' name='lastName' label='Last Name' />
            <FormInput type='text' name='username' label='Username' />
          </div>
          <SubmitButton text='Create Profile' className='mt-8' />
        </FormContainer>
      </div>
    </>
  );
};
export default CreateProfilePage;

