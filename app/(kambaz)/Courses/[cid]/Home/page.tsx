import Modules from "../Modules/page";
import CourseStatus from "./Status";
import Navigation from "../Navigation";
export default function Home({ params }: { params: { cid: string } }) {
  const { cid } = params;
  return (
    <div id="wd-home">
      <h1><b>Course {cid}</b></h1>
      <hr />
      <table>
        <tbody>
          <tr>
            <td valign="top" width="180"> 
              <Navigation cid={cid} />
            </td>
            <td valign="top" width="70%">
              <Modules />
            </td>
            <td valign="top" width="180">
              <CourseStatus />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

