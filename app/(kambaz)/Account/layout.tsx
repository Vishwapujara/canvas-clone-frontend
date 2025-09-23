import { ReactNode } from "react";
import KambazNavigation from "./../Navigation";
import Navigation from "./Navigation";
export default function AccountLayout({ children }: Readonly<{ children: ReactNode }>) {
 return (
   <div id="wd-kambaz">
     <table>
       <tbody>
         <tr>
          <td valign="top" width="180">
            <KambazNavigation/>
          </td>
           <td valign="top" width="180">
             <Navigation />
           </td>
           <td valign="top" width="100%">
             {children}
           </td>
         </tr>
       </tbody>
     </table>
  </div>
);}

