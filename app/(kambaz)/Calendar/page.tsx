import Link from "next/link";
import KambazNavigation from "../Navigation";
export default function Calender() {
  return (
    <div id="wd-calender">
      <div>
        <table>
          <tbody>
            <tr>
              <td valign="top" width="180">
                <KambazNavigation />
              </td>
              <td valign="top" width="100%">
                <h1 id="wd-calendar-title">Calendar</h1> <hr />

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
