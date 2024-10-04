import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/", "/properties(.*)", "/about", "/api/supabase(.*)"]);

// const isProtectedRoute = createRouteMatcher([
//   "/bookings(.*)",
//   "/checkout(.*)",
//   "/favorites(.*)",
//   "/profile(.*)",
//   "/rentals(.*)",
//   "/reservation(.*)",
//   "/reviews(.*)",
// ]);

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  // console.log(auth().userId);
  const isAdmin = auth().userId === process.env.ADMIN_USER_ID;
  const isUser = auth().userId;

  // if adminRoute, not admin
  if (isAdminRoute(req) && !isAdmin) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // if isProtectedRoute and not logged in, ruturn to home
  if (!isPublicRoute(req) && !isUser && !isAdmin) {
    return NextResponse.redirect(new URL("/", req.url));
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
