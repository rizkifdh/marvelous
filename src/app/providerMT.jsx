"use client";

import { ThemeProvider } from "@material-tailwind/react";

export default function MTProviders({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
