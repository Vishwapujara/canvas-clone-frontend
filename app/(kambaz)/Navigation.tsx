// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { ListGroup, ListGroupItem } from "react-bootstrap";
// import { FaRegCalendarAlt, FaUserCircle, FaBookOpen } from "react-icons/fa";
// import { FiMail } from "react-icons/fi";
// import { VscBeaker } from "react-icons/vsc";
// import { MdDashboard } from "react-icons/md";

// const links = [
//   {
//     id: "wd-account-link",
//     href: "/Account",
//     label: "Account",
//     icon: <FaUserCircle className="fs-1" />,
//   },
//   {
//     id: "wd-dashboard-link",
//     href: "/Dashboard",
//     label: "Dashboard",
//     icon: <MdDashboard className="fs-1" />,
//   },
//   {
//     id: "wd-courses-link",
//     href: "/Dashboard", // maybe later change to /Courses
//     label: "Courses",
//     icon: <FaBookOpen className="fs-1" />,
//   },
//   {
//     id: "wd-calendar-link",
//     href: "/Calendar",
//     label: "Calendar",
//     icon: <FaRegCalendarAlt className="fs-1" />,
//   },
//   {
//     id: "wd-inbox-link",
//     href: "/Inbox",
//     label: "Inbox",
//     icon: <FiMail className="fs-1" />,
//   },
//   {
//     id: "wd-labs-link",
//     href: "/Labs",
//     label: "Labs",
//     icon: <VscBeaker className="fs-1" />,
//   },
// ];

// export default function KambazNavigation() {
//   const pathname = usePathname();

//   return (
//     <ListGroup
//       className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
//       style={{ width: 120 }}
//       id="wd-kambaz-navigation"
//     >
//       {/* Northeastern Logo */}
//       <ListGroupItem
//         className="bg-black border-0 text-center"
//         as="a"
//         target="_blank"
//         href="https://www.northeastern.edu/"
//         id="wd-neu-link"
//       >
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaN0w4LxKNf3mbLLL-YgIxBA8CrEXI09BdKA&s"
//           width="75px"
//           alt="Northeastern University"
//         />
//       </ListGroupItem>

//       {/* Dynamic Links */}
//       {links.map(({ id, href, label, icon }) => {
//         const isActive = pathname.startsWith(href);
//         return (
//           <ListGroupItem
//             key={id}
//             id={id}
//             className={`border-0 text-center ${
//               isActive ? "bg-white" : "bg-black"
//             }`}
//           >
//             <Link
//               href={href}
//               className={`text-decoration-none ${
//                 isActive ? "text-danger" : "text-white"
//               }`}
//             >
//               {icon}
//               <br />
//               {label}
//             </Link>
//           </ListGroupItem>
//         );
//       })}
//     </ListGroup>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaRegCalendarAlt, FaUserCircle, FaBookOpen, FaBars, FaTimes } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { VscBeaker } from "react-icons/vsc";
import { MdDashboard } from "react-icons/md";

const links = [
  { id: "wd-account-link", href: "/Account", label: "Account", icon: <FaUserCircle className="fs-1" /> },
  { id: "wd-dashboard-link", href: "/Dashboard", label: "Dashboard", icon: <MdDashboard className="fs-1" /> },
  { id: "wd-courses-link", href: "/Dashboard", label: "Courses", icon: <FaBookOpen className="fs-1" /> },
  { id: "wd-calendar-link", href: "/Calendar", label: "Calendar", icon: <FaRegCalendarAlt className="fs-1" /> },
  { id: "wd-inbox-link", href: "/Inbox", label: "Inbox", icon: <FiMail className="fs-1" /> },
  { id: "wd-labs-link", href: "/Labs", label: "Labs", icon: <VscBeaker className="fs-1" /> },
];

export default function KambazNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button - mobile only */}
      <button
        className="hamburger-btn d-md-none"
        onClick={() => setIsOpen(true)} // open sidebar
      >
        <FaBars size={28} />
      </button>

      {/* Sidebar */}
      <div className={`kambaz-sidebar ${isOpen ? "open" : ""}`} id="wd-kambaz-navigation">
        {/* Close Button - mobile only */}
        <button
          className="close-btn d-md-none"
          onClick={() => setIsOpen(false)} // close sidebar
        >
          <FaTimes size={28} />
        </button>

        {/* Northeastern Logo */}
        <ListGroupItem
          className="bg-black border-0 text-center"
          as="a"
          target="_blank"
          href="https://www.northeastern.edu/"
          id="wd-neu-link"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaN0w4LxKNf3mbLLL-YgIxBA8CrEXI09BdKA&s"
            width="75px"
            alt="Northeastern University"
          />
        </ListGroupItem>

        {/* Dynamic Links */}
        {links.map(({ id, href, label, icon }) => {
          const isActive = pathname.startsWith(href);
          return (
            <ListGroupItem
              key={id}
              id={id}
              className={`border-0  text-center ${isActive ? "bg-white" : "bg-black"}`}
            >
              <Link
                href={href}
                className={`text-decoration-none ${isActive ? "text-danger" : "text-white"}`}
                onClick={() => setIsOpen(false)} // auto-close sidebar on mobile link click
              >
                {icon}
                <br />
                {label}
              </Link>
            </ListGroupItem>
          );
        })}
      </div>

      {/* Optional: Mobile overlay when sidebar is open */}
      {isOpen && (
        <div
          className="sidebar-overlay d-md-none"
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 999,
          }}
        />
      )}
    </>
  );
}
