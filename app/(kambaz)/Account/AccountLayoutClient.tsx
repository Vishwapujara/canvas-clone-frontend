"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import KambazNavigation from "../Navigation";
import AccountNavigation from "./Navigation";

export default function AccountLayoutClient({ children }: Readonly<{ children: ReactNode }>) {
  const pathname = usePathname();

  const getActivePage = () => {
    if (pathname.includes("/Signin")) return "Signin";
    if (pathname.includes("/Signup")) return "Signup";
    if (pathname.includes("/Profile")) return "Profile";
    return "Signin";
  };

  return (
    <div className="d-flex">
      {/* UNCOMMENT THIS LINE */}
      <KambazNavigation />
      
      {/* REMOVE OR COMMENT OUT these lines */}
      {/* <div style={{ marginLeft: "10px" }}>
        <AccountNavigation activePage={getActivePage()} />
      </div> */}
      
      {/* Keep the content area but adjust margin for sidebar */}
      <div className="flex-fill p-4" style={{ marginLeft: "110px" }}>
        <AccountNavigation activePage={getActivePage()} />
        {children}
      </div>
    </div>
  );
}