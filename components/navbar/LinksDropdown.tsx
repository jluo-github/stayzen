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
import { auth } from "@clerk/nextjs/server";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

const LinksDropdown = () => {
  const { userId } = auth();
  const isAdmin = userId === process.env.ADMIN_USER_ID;

  return (
    <DropdownMenu>
      {/*dropdown menu trigger */}
      <DropdownMenuTrigger asChild>
        <Button variant='link'>
          <GiHamburgerMenu className='w-6 h-6 mr-4 text-violet-600 dark:text-violet-400' />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>

      {/*dropdown menu content, login, logout button*/}
      <DropdownMenuContent className='w-52' align='start' sideOffset={10}>
        {/* signed out */}
        <SignedOut>
          <DropdownMenuItem>
            {/* home */}
            <button className='w-full text-left'>
              <Link href='/'>Home</Link>
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            {/* about */}
            <button className='w-full text-left'>
              <Link href='/about'>About</Link>
            </button>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            {/* login button */}
            <SignInButton mode='modal'>
              <button className='w-full text-left'>Login</button>
            </SignInButton>
          </DropdownMenuItem>

          {/* register button */}
          <DropdownMenuItem>
            <SignUpButton mode='modal'>
              <button className='w-full text-left'>Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>

        {/* signed in */}
        <SignedIn>
          {links.map((link) => {
            if (link.label === "admin" && !isAdmin) return null;

            return (
              <DropdownMenuItem key={link.href}>
                <Link href={link.href} className='capitalize w-full'>
                  {link.label}
                </Link>
              </DropdownMenuItem>
            );
          })}
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
