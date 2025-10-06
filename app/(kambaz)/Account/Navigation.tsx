// import Link from "next/link";
// export default function AccountNavigation() {
//  return (
//    <div id="wd-account-navigation">
//      <Link href="Signin"> Signin </Link> <br />
//      <Link href="Signup"> Signup </Link> <br />
//      <Link href="Profile"> Profile </Link> <br />
//    </div>
// );}

import Link from "next/link";

interface AccountNavigationProps {
  activePage?: string;  // Only this prop
}

export default function AccountNavigation({ activePage = "Signin" }: AccountNavigationProps) {
   const getItemClass = (page: string) => {
    const isActive = activePage === page;
    return `list-group-item border-0 ${isActive ? "wd-active text-black border-start border-4 border-black" : "text-danger"}`;
  };

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link 
        href="/Account/Signin" 
        id="wd-account-signin-link"
        className={getItemClass("Signin")}
      >
        Signin
      </Link>
      <Link 
        href="/Account/Signup" 
        id="wd-account-signup-link"
        className={getItemClass("Signup")}
      >
        Signup
      </Link>
      <Link 
        href="/Account/Profile" 
        id="wd-account-profile-link"
        className={getItemClass("Profile")}
      >
        Profile
      </Link>
    </div>
  );
}