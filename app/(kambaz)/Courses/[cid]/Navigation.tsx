// // 'use client';

// // import Link from 'next/link';
// // import { usePathname } from 'next/navigation';
// // import { useEffect, useState } from 'react';

// // interface CourseNavigationProps {
// //   cid: string;
// // }

// // export default function CourseNavigation({ cid }: CourseNavigationProps) {
// //   const pathname = usePathname();
// //   const [mounted, setMounted] = useState(false);

// //   // Prevent SSR/client mismatch
// //   useEffect(() => {
// //     setMounted(true);
// //   }, []);

// //   if (!mounted) return null;

// //   const links = [
// //     { href: `/Courses/${cid}/Home`, label: 'Home', id: 'wd-course-home-link' },
// //     { href: `/Courses/${cid}/Modules`, label: 'Modules', id: 'wd-course-modules-link' },
// //     { href: `/Courses/${cid}/Piazza`, label: 'Piazza', id: 'wd-course-piazza-link' },
// //     { href: `/Courses/${cid}/Zoom`, label: 'Zoom', id: 'wd-course-zoom-link' },
// //     { href: `/Courses/${cid}/Assignments`, label: 'Assignments', id: 'wd-course-assignments-link' },
// //     { href: `/Courses/${cid}/Quizzes`, label: 'Quizzes', id: 'wd-course-quizzes-link' },
// //     { href: `/Courses/${cid}/Grades`, label: 'Grades', id: 'wd-course-grades-link' },
// //     { href: `/Courses/${cid}/People`, label: 'People', id: 'wd-course-people-link' },
// //   ];

// //   return (
// //     <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
// //       {links.map(link => {
// //         const isActive = pathname === link.href;
// //         return (
// //           <Link
// //             key={link.id}
// //             href={link.href}
// //             id={link.id}
// //             className={`list-group-item border-0 ${isActive ? 'wd-active' : ''}`}
// //           >
// //             {link.label}
// //           </Link>
// //         );
// //       })}
// //     </div>
// //   );
// // }

// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useEffect, useState } from 'react';

// interface CourseNavigationProps {
//   cid: string;
// }

// export default function CourseNavigation({ cid }: CourseNavigationProps) {
//   const pathname = usePathname();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => setMounted(true), []);

//   if (!mounted) return null;

//   const links = [
//     { href: `/Courses/${cid}/Home`, label: 'Home', id: 'wd-course-home-link' },
//     { href: `/Courses/${cid}/Modules`, label: 'Modules', id: 'wd-course-modules-link' },
//     { href: `/Courses/${cid}/Piazza`, label: 'Piazza', id: 'wd-course-piazza-link' },
//     { href: `/Courses/${cid}/Zoom`, label: 'Zoom', id: 'wd-course-zoom-link' },
//     { href: `/Courses/${cid}/Assignments`, label: 'Assignments', id: 'wd-course-assignments-link' },
//     { href: `/Courses/${cid}/Quizzes`, label: 'Quizzes', id: 'wd-course-quizzes-link' },
//     { href: `/Courses/${cid}/Grades`, label: 'Grades', id: 'wd-course-grades-link' },
//     { href: `/Courses/${cid}/People`, label: 'People', id: 'wd-course-people-link' },
//   ];

//   return (
//     <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
//       {links.map(({ href, label, id }) => {
//         const isActive = pathname === href;
//         return (
//           <Link
//             key={id}
//             href={href}
//             id={id}
//             className={`list-group-item border-0 ${
//               isActive ? 'wd-active' : ''
//             }`}
//           >
//             {label}
//           </Link>
//         );
//       })}
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface CourseNavigationProps {
  cid: string;
}

export default function CourseNavigation({ cid }: CourseNavigationProps) {
  const pathname = usePathname();

  const links = [
    { href: "/Courses/1234/Home", id: "wd-course-home-link", label: "Home" },
    { href: "/Courses/1234/Modules", id: "wd-course-modules-link", label: "Modules" },
    { href: "/Courses/1234/Piazza", id: "wd-course-piazza-link", label: "Piazza" },
    { href: "/Courses/1234/Zoom", id: "wd-course-zoom-link", label: "Zoom" },
    { href: "/Courses/1234/Assignments", id: "wd-course-assignments-link", label: "Assignments" },
    { href: "/Courses/1234/Quizzes", id: "wd-course-quizzes-link", label: "Quizzes" },
    { href: "/Courses/1234/Grades", id: "wd-course-grades-link", label: "Grades" },
    { href: "/Courses/1234/People", id: "wd-course-people-link", label: "People" },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.id}
            href={link.href}
            id={link.id}
            className={`list-group-item border-0 ${
              isActive ? "wd-active text-black border-start border-4 border-black" : "text-danger"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );}