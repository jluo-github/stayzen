import Link from "next/link";
import logo from "@/public/images/logo.png";

import Image from "next/image"; // Add this line to import the 'Image' component

const Logo = () => {
  return (
    // <Button size='sm' asChild>
    <Link href='/' className='flex flex-col items-center justify-center'>
      <Image src={logo} width={55} height={55} alt='logo' />
      <span className='text-primary font-semibold dark:text-violet-200'>
        StayZen
      </span>
    </Link>
    // </Button>
  );
};
export default Logo;
