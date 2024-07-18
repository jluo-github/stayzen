import Link from "next/link";
import { Button } from "../ui/button";
import logo from "@/public/images/logo.png";

import Image from "next/image"; // Add this line to import the 'Image' component

const Logo = () => {
  return (
    // <Button size='sm' asChild>
    <Link href='/'>
      <Image src={logo} width={50} height={50} alt='logo' />
    </Link>
    // </Button>
  );
};
export default Logo;
