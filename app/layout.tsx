import React, { ReactNode } from "react";
import type { Metadata } from "next";

import { TanstackProvider } from "@/lib/providers/tanstack-provider";
import { ThemeProvider } from "@/lib/providers/theme-provider";
import { ToastProvider } from "@/lib/providers/toast-provider";

import { NavigationBar } from "@/components/index";

import "@/app/styles/globals.css";

type Children = {
  children: ReactNode;
};

export const metadata: Metadata = {
  icons: {
    icon: "/logo.png",
    shortcut: "/logo/png",
  },
  title: "Cloud Coffee House",
  description: "Firebase, Next.JS, Tailwind CSS and Shadcn UI sample project.",
};

const RootLayout = ({ children }: Children) => {
  return (
    <html lang="en">
      <body className="scroll-smooth font-opensans antialiased">
        <TanstackProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavigationBar />
            <main>
              <ToastProvider />
              {children}
            </main>
          </ThemeProvider>
        </TanstackProvider>
      </body>
    </html>
  );
};

export default RootLayout;
