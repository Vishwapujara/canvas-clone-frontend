// import Link from "next/link";
// export default function AccountNavigation() {
//  return (
//    <div id="wd-account-navigation">
//      <Link href="Signin"> Signin </Link> <br />
//      <Link href="Signup"> Signup </Link> <br />
//      <Link href="Profile"> Profile </Link> <br />
//    </div>
// );}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

type AccountNavigationProps = {
	activePage?: string;
};

export default function AccountNavigation({ activePage }: AccountNavigationProps) {
  const pathname = usePathname();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);

  // show Profile when signed in, otherwise Signin & Signup
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  const isActive = (link: string) => {
    if (activePage) return activePage.toLowerCase() === link.toLowerCase();
    return pathname?.toLowerCase().endsWith(link.toLowerCase());
  };

  return (
    <Nav className="flex-column nav-pills">
      {links.map((link) => {
        const href = `/Account/${link}`;
        const active = isActive(link);
        return (
          <Nav.Item key={link} className="mb-2">
            <Nav.Link as={Link} href={href} className={active ? "active" : ""}>
              {link}
            </Nav.Link>
          </Nav.Item>
        );
      })}
    </Nav>
  );
}