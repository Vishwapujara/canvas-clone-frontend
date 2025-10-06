// import Modules from "../Modules/Modules";
// import CourseStatus from "./Status";
// import Navigation from "../Navigation";

// export default function Home({ params }: { params: { cid: string } }) {
//   const { cid } = params;
//   return (
//     <div id="wd-home" className="container-fluid mt-3">
//       <h1><b>Course {cid}</b></h1>
//       <hr />

//       {/* Flexbox layout instead of <table> */}
//       <div className="d-flex">
//         {/* Left Sidebar: Navigation */}
//         <div className="d-none d-md-block me-3" style={{ width: "180px" }}>
//           <Navigation cid={cid} />
//         </div>

//         {/* Main Content: Modules */}
//         <div className="flex-fill me-3">
//           <Modules />
//         </div>

//         {/* Right Sidebar: Course Status (hidden on small screens) */}
//         <div className="d-none d-lg-block ms-3" style={{ width: "180px" }}>
//           <CourseStatus />
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import { use } from "react";
import Modules from "../Modules/page";
import CourseStatus from "./Status";

export default function Home({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = use(params);
  return (
    <div id="wd-home">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Course {cid}</h2>
      </div>

      <hr />
      {/* Flexbox layout for Modules and Status */}
      <div className="d-flex">
        {/* Main Content: Modules - Takes most space */}
        <div className="flex-fill me-4">
          <Modules />
        </div>

        {/* Right Sidebar: Course Status (hidden on medium and smaller screens) */}
        <div className="d-none d-xl-block">
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}