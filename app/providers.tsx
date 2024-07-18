import { ThemeProvider } from "@/components/theme-provider";
import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";

// doc:https://ui.shadcn.com/docs/dark-mode/next

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </>
  );
};
export default Providers;
