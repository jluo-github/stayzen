import type { Metadata } from "next";
import { Poppins, Montserrat, Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Providers from "./providers";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

// font families
const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });
const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
const ubuntu = Ubuntu({ weight: ["400", "500", "700"], subsets: ["latin"] });

// metadata
export const metadata: Metadata = {
  title: {
    default: "PurpleCat-Next-StayZen",
    template: "%s | PurpleCat-Next-StayZen",
  },
  description: "Explore. Relax. StayZen.",
};

// layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body
          className={`${montserrat.className} ${poppins.className} ${ubuntu.className}`}>
          <Providers>
            <Navbar />
            <main className='container py-10'>{children}</main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
