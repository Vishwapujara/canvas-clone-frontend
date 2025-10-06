// import Link from "next/link";
// import { ListGroup, ListGroupItem } from "react-bootstrap";
// import { FaRegCalendarAlt, FaUserCircle, FaBookOpen } from "react-icons/fa";
// import { FiMail } from "react-icons/fi";
// import { VscBeaker } from "react-icons/vsc";
// import { MdDashboard } from "react-icons/md";
// // import { AiOutlineDashboard, AiOutlineBook, AiOutlineCalendar, AiOutlineInbox, AiOutlineGitlab } from "react-icons/ai";
// // import { FaRegCircleUser } from "react-icons/fa6";
// export default function KambazNavigation() {
//   return (
//     // <div id="wd-kambaz-navigation">
//     //   <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br/>
//     //   <Link href="/Account" id="wd-account-link">Account</Link><br/>
//     //   <Link href="/Dashboard" id="wd-dashboard-link">Dashboard</Link><br/>
//     //   <Link href="/Dashboard" id="wd-course-link">Courses</Link><br/>
//     //   <Link href="/Calendar" id="wd-calendar-link">Calendar</Link><br/>
//     //   <Link href="/Inbox" id="wd-inbox-link">Inbox</Link><br/>
//     //   <Link href="/Labs" id="wd-labs-link">Labs</Link><br/>
//     // </div>
//     <ListGroup className="rounded-0  position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{ width: 120 }}
//               id="wd-kambaz-navigation">
//      <ListGroupItem className="bg-black border-0 text-center" as="a"
//               target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
//        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaN0w4LxKNf3mbLLL-YgIxBA8CrEXI09BdKA&s" width="75px" alt="Northeastern University" />
//      </ListGroupItem>
//       {/* Account */}
//       <ListGroupItem className="border-0 bg-black text-center">
//         <Link
//           href="/Account"
//           id="wd-account-link"
//           className="text-white text-decoration-none"
//         >
//           <FaUserCircle className="fs-1 text-white" />
//           <br />
//           Account
//         </Link>
//       </ListGroupItem>

//       {/* Dashboard */}
//       <ListGroupItem className="border-0 bg-white text-center">
//         <Link
//           href="/Dashboard"
//           id="wd-dashboard-link"
//           className="text-danger text-decoration-none"
//         >
//           <MdDashboard className="fs-1 text-danger" />
//           <br />
//           Dashboard
//         </Link>
//       </ListGroupItem>

//       {/* Courses */}
//       <ListGroupItem className="border-0 bg-white text-center">
//         <Link
//           href="/Dashboard"
//           id="wd-courses-link"
//           className="text-danger text-decoration-none"
//         >
//           <FaBookOpen className="fs-1 text-danger" />
//           <br />
//           Courses
//         </Link>
//       </ListGroupItem>

//       {/* Calendar */}
//       <ListGroupItem className="border-0 bg-white text-center">
//         <Link
//           href="/Calendar"
//           id="wd-calendar-link"
//           className="text-danger text-decoration-none"
//         >
//           <FaRegCalendarAlt className="fs-1 text-danger" />
//           <br />
//           Calendar
//         </Link>
//       </ListGroupItem>

//       {/* Inbox */}
//       <ListGroupItem className="border-0 bg-white text-center">
//         <Link
//           href="/Inbox"
//           id="wd-inbox-link"
//           className="text-danger text-decoration-none"
//         >
//           <FiMail className="fs-1 text-danger" />
//           <br />
//           Inbox
//         </Link>
//       </ListGroupItem>

//       {/* Labs */}
//       <ListGroupItem className="border-0 bg-white text-center">
//         <Link
//           href="/Labs"
//           id="wd-labs-link"
//           className="text-danger text-decoration-none"
//         >
//           <VscBeaker className="fs-1 text-danger" />
//           <br />
//           Labs
//         </Link>
//       </ListGroupItem>
     
//    </ListGroup>

// );}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaRegCalendarAlt, FaUserCircle, FaBookOpen } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { VscBeaker } from "react-icons/vsc";
import { MdDashboard } from "react-icons/md";

const links = [
  {
    id: "wd-account-link",
    href: "/Account",
    label: "Account",
    icon: <FaUserCircle className="fs-1" />,
  },
  {
    id: "wd-dashboard-link",
    href: "/Dashboard",
    label: "Dashboard",
    icon: <MdDashboard className="fs-1" />,
  },
  {
    id: "wd-courses-link",
    href: "/Dashboard", // maybe later change to /Courses
    label: "Courses",
    icon: <FaBookOpen className="fs-1" />,
  },
  {
    id: "wd-calendar-link",
    href: "/Calendar",
    label: "Calendar",
    icon: <FaRegCalendarAlt className="fs-1" />,
  },
  {
    id: "wd-inbox-link",
    href: "/Inbox",
    label: "Inbox",
    icon: <FiMail className="fs-1" />,
  },
  {
    id: "wd-labs-link",
    href: "/Labs",
    label: "Labs",
    icon: <VscBeaker className="fs-1" />,
  },
];

export default function KambazNavigation() {
  const pathname = usePathname();

  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 120 }}
      id="wd-kambaz-navigation"
    >
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
            className={`border-0 text-center ${
              isActive ? "bg-white" : "bg-black"
            }`}
          >
            <Link
              href={href}
              className={`text-decoration-none ${
                isActive ? "text-danger" : "text-white"
              }`}
            >
              {icon}
              <br />
              {label}
            </Link>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}
