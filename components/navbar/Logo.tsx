import Link from "next/link";
import { Button } from "../ui/button";
import logo from "@/public/images/logo.png";

import Image from "next/image"; // Add this line to import the 'Image' component

const Logo = () => {
  return (
    // <Button size='sm' asChild>
    <Link href='/' className='flex flex-col items-center justify-center'>
      <Image src={logo} width={55} height={55} alt='logo' />
      <span className='text-violet-600 font-semibold dark:text-white'>
        StayZen
      </span>
    </Link>
    // </Button>
  );
};
export default Logo;
