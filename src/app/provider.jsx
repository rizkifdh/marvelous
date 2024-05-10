"use client";

import { ThemeProvider } from "next-themes";
import MTProviders from "./providerMT";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MTProviders>{children}</MTProviders>
    </ThemeProvider>
  );
}
