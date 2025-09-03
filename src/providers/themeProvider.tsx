"use client";

import { ThemeProvider } from "next-themes";

const AppThemeProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
