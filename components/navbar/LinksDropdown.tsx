// "use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import { links } from "@/utils/links";
import SignOutLink from "./SignOutLink";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const LinksDropdown = () => {
  return (
    <DropdownMenu>
      {/*dropdown menu trigger */}
      <DropdownMenuTrigger asChild>
        <Button variant='link'>
          <GiHamburgerMenu className='w-6 h-6 mr-4' />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>

      {/*dropdown menu content, login, logout button*/}
      <DropdownMenuContent className='w-52' align='start' sideOffset={10}>
        {/* signed out */}
        <SignedOut>
          <DropdownMenuItem>
            {/* login button */}
            <SignInButton mode='modal'>
              <button className='w-full text-left'>Login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          {/* register button */}
          <DropdownMenuItem>
            <SignUpButton mode='modal'>
              <button className='w-full text-left'>Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>

        {/* signed in */}
        <SignedIn>
          {/* links */}
          {links.map((link) => (
            <DropdownMenuItem key={link.href}>
              <Link href={link.href} className='capitalize w-full'>
                {link.label}
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />

          {/* sign out button */}
          <DropdownMenuLabel>
            <SignOutLink />
          </DropdownMenuLabel>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default LinksDropdown;
