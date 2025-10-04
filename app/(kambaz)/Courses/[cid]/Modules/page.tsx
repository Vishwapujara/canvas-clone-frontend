import Modules from "./Modules";
import Navigation from "../Navigation";
export default function Module({ params }: { params: { cid: string } }) {
  const { cid } = params;
  return (
    <div id="wd-modules">
      <h1><b>Course {cid}</b></h1>
      <hr />
      <table>
        <tbody>
          <tr>
            <td valign="top" width="180"> 
              <Navigation cid={cid} />
            </td>
            <td valign="top" width="100%">
              <Modules />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}