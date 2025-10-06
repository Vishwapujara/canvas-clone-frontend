// import Navigation from "../Navigation";
// export default function Quizzes({ params }: { params: { cid: string } }) {
//   const { cid } = params;
//   return (
//     <div id="wd-quizzes">
//       <h1><b>Course {cid}</b></h1>
//       <hr />
//       <table>
//         <tbody>
//           <tr>
//             <td valign="top" width="180"> 
//               <Navigation cid={cid} />
//             </td>
//             <td valign="top" width="100%">
//                 <h1>Quizzes Integration Coming Soon!</h1>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

import { use } from 'react';

export default function Quizzes({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = use(params);
  
  return (
    <div id="wd-quizzes">
      <h2>Quizzes</h2>
      <hr />
      <div className="alert alert-warning" role="alert">
        <h3>Quizzes Integration Coming Soon!</h3>
        <p className="mb-0">This feature will be available in a future update.</p>
      </div>
    </div>
  );
}