// import Link from "next/link";
// import KambazNavigation from "../Navigation";
// export default function Calender() {
//   return (
//     <div id="wd-calender">
//       <div>
//         <table>
//           <tbody>
//             <tr>
//               <td valign="top" width="180">
//                 <KambazNavigation />
//               </td>
//               <td valign="top" width="100%">
//                 <h1 id="wd-calendar-title">Calendar</h1> <hr />

//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

import { ReactNode } from "react";
import KambazNavigation from "../Navigation";
import "../styles.css";

export default function Calendar({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz-calendar">
      <div className="d-flex">
        <div className="d-none d-md-block">
          <KambazNavigation />
        </div>
        <div className="wd-main-content-offset">
          <br />
          <h2>Calendar</h2>
        </div>
        <hr />
      </div>
      <hr />  
    </div>
  );
}
