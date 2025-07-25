"use client";

import { usePathname } from "next/navigation";
import Navbar from "./UI/Navbar";
import { ROUTES } from "./Util/CommonConstants";

const CurrentLayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== ROUTES.login.route && <Navbar />}
      <main className="pt-16">{children}</main>
    </>
  );
};

export default CurrentLayoutWrapper;
