import React, { ReactNode } from "react";
import type { Metadata } from "next";

import { ToastProvider } from "@/lib/providers/toast-provider";

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
        <main>
          <ToastProvider />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
