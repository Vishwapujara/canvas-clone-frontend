"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  // usePathname() can be null, so use empty string as fallback for safety
  const pathname = usePathname() ?? "";

  // Determine which links to show based on login status
  // Note: 'Users' is handled separately for admin role check
  const baseLinks = currentUser ? ["Profile"] : ["Signin", "Signup"];

  // Add Users link if the user is an admin
  if (currentUser && currentUser.role === "ADMIN") {
    baseLinks.push("Users");
  }

  // Function to apply the correct styling based on active state
  const getItemClass = (page: string) => {
    const name = page.toLowerCase();
    
    // Check if the current pathname ends with the page name (case-insensitive)
    const isActive = pathname.endsWith(`/${name}`);
    
    // Apply the same classes used in CourseNavigation:
    // wd-active text-black border-start border-4 border-black for active
    // text-danger for inactive
    return `list-group-item border-0 ${
      isActive
        ? "wd-active text-black border-start border-4 border-black"
        : "text-danger"
    }`;
  };

  return (
    // Revert to original structure using list-group for consistent styling
    <div className="wd list-group fs-5 rounded-0">
      
      {/* Signin Link */}
      {baseLinks.includes("Signin") && (
        <Link 
          href="/Account/Signin" 
          id="wd-account-signin-link" 
          className={getItemClass("Signin")}
        >
          <h5>Signin</h5>
        </Link>
      )}

      {/* Signup Link */}
      {baseLinks.includes("Signup") && (
        <Link 
          href="/Account/Signup" 
          id="wd-account-signup-link" 
          className={getItemClass("Signup")}
        >
          <h5>Signup</h5>
        </Link>
      )}

      {/* Profile Link */}
      {baseLinks.includes("Profile") && (
        <Link 
          href="/Account/Profile" 
          id="wd-account-profile-link" 
          className={getItemClass("Profile")}
        >
          <h5>Profile</h5>
        </Link>
      )}

      {/* Users Link (Admin Only) */}
      {baseLinks.includes("Users") && (
        <Link 
          href="/Account/Users" 
          id="wd-account-users-link" 
          className={getItemClass("Users")}
        >
          <h5>Users</h5>
        </Link>
      )}
    </div>
  );
}