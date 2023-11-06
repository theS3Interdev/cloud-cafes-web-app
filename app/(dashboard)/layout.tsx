import { ReactNode } from "react";

import { NavigationBar } from "@/components/index";

type Children = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: Children) => {
  return (
    <div>
      <main>
        <NavigationBar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
