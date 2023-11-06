import Link from "next/link";

import { Container } from "@/components/generic/container";
import { NavigationBarActions } from "./navigation-bar-actions";

export const NavigationBar = () => {
  return (
    <div>
      <div className="border-b">
        <Container>
          <div className="relative flex h-16 items-center justify-between px-3">
            <div className="flex items-center">
              <Link href="/" className="mr-1 lg:mr-3">
                <p className="font-montserrat text-xl font-bold tracking-wide">
                  Cloud Cafe House
                </p>
              </Link>
            </div>

            <NavigationBarActions />
          </div>
        </Container>
      </div>
    </div>
  );
};
