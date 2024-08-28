
import Image from "next/image";

type UserInfoProps = {
  profile: {
    profileImage: string;
    firstName: string;
  };
};

const UserInfo = ({ profile: { profileImage, firstName } }: UserInfoProps) => {
  return (
    <div className='grid grid-cols-[auto,1fr] gap-4 mt-4'>
      {/* profile image */}
      <Image
        src={profileImage}
        alt={firstName}
        width={50}
        height={50}
        className='w-12 h-12 object-cover rounded-full'
      />
      {/* name */}
      <div>
        <p>
          Hosted By <span className='font-bold'>{firstName}</span>
        </p>
        <p className='text-muted-foreground'></p>
      </div>
    </div>
  );
};
export default UserInfo;
