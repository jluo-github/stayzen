### Please visit [PurpleCat-StayZen](https://purplecat-stayzen.vercel.app) for details

### Shadcn/ui

[Docs](https://ui.shadcn.com/)

[Next Install](https://ui.shadcn.com/docs/installation/next)

```
npx shadcn-ui@latest init

npx shadcn-ui@latest add button breadcrumb calendar card checkbox dropdown-menu input label popover scroll-area select separator table textarea skeleton



```

### react-icons

[React Icons](https://react-icons.github.io/react-icons/)

```
npm install react-icons

```

### next-themes

[Shadcn-ui dark mode](https://ui.shadcn.com/docs/dark-mode/next)

```
npm install next-themes

```

### lucide-react

```
npm install lucide-react

```

### Clerk

[Clerk Docs](https://clerk.com/)
[Clerk + Next.js Setup](https://clerk.com/docs/quickstarts/nextjs)

```
npm install @clerk/nextjs

```

### Toast

[Toast](https://ui.shadcn.com/docs/components/toast)

```
npx shadcn-ui@latest add toast

```

### zod

```
npm install zod

```

### prisma

(Prisma Instance)[https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices#solution]

[Prisma Docs](https://www.prisma.io/docs/concepts/components/prisma-client/crud)

```
npm install prisma --save-dev
npm install @prisma/client


npx prisma inity

npx prisma migrate dev --name init
npx prisma studio

```

### supabase

[Useful Info](https://supabase.com/partners/integrations/prisma)
[supabase setting](https://supabase.com/dashboard/project/qznnseygugjjcdbpnfho/settings/database)

```
npm install @supabase/supabase-js

```

### world-countries

```
npm i world-countries

```

### use-debounce

```
npm i use-debounce

```

### react-share

```
npm i react-share

```

### react-leaflet

[React Leaflet](https://react-leaflet.js.org/)

```
npm install react react-dom leaflet react-leaflet
npm install -D @types/leaflet

```

### zustand

[zustand docs](https://docs.pmnd.rs/zustand/getting-started/introduction)

```
npm install zustand

```

### recharts

[Recharts](https://recharts.org/en-US/)

```
npm install recharts

```

### Stripe

[Embedded Form](https://docs.stripe.com/checkout/embedded/quickstart)

```
npm install --save @stripe/react-stripe-js @stripe/stripe-js stripe axios

```





```

GRANT USAGE ON SCHEMA public2 TO anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA public2 TO anon, authenticated, service_role;
GRANT ALL ON ALL ROUTINES IN SCHEMA public2 TO anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public2 TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public2 GRANT ALL ON TABLES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public2 GRANT ALL ON ROUTINES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public2 GRANT ALL ON SEQUENCES TO anon, authenticated, service_role;



```