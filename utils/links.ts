export type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: "/", label: "home" },
  { href: "/rentals", label: "my rentals" },
  { href: "/rentals/create ", label: "create rental" },
  { href: "/bookings ", label: "bookings" },
  { href: "/reservations ", label: "reservations" },
  { href: "/favorites ", label: "favorites" },
  { href: "/reviews ", label: "reviews" },
  { href: "/profile ", label: "profile" },
  { href: "/about", label: "about" },
  { href: "/admin", label: "admin" },
];
