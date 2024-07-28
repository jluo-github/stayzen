import FormContainer from "@/components/form/FormContainer";
import {
  fetchProfileAction,
  updateProfileAction,
  updateProfileImageAction,
} from "@/utils/actions";
import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";
import ImageInputContainer from "@/components/form/ImageInputContainer";

const ProfilePage = async () => {
  const profile = await fetchProfileAction();
  return (
    <>
      <h2 className='mb-8'>User Profile</h2>
      <div className='border p-8 rounded-md'>
        {/* img input container */}
        <ImageInputContainer
          image={profile.profileImage}
          name={profile.username}
          action={updateProfileImageAction}
          text='Update Profile Image'
        />

        {/* form container */}

        <FormContainer action={updateProfileAction}>
          <div className=''>
            <FormInput
              type='text'
              name='firstName'
              label='First Name'
              defaultValue={profile.firstName}
            />
            <FormInput
              type='text'
              name='lastName'
              label='Last Name'
              defaultValue={profile.lastName}
            />
            <FormInput
              type='text'
              name='username'
              label='Username'
              defaultValue={profile.username}
            />
          </div>

          <SubmitButton text='Update Profile' className='mt-8' />
        </FormContainer>
      </div>
    </>
  );
};
export default ProfilePage;
