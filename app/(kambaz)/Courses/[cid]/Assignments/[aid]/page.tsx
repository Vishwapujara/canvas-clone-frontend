// import Navigation from "../../Navigation";

// export default function Assignments({ params }: { params: Record<string, string> }) {
//     const { cid } = params;
//     return (
//         <div id="wd-home">
//             <h1><b>Course {cid}</b></h1>
//             <hr />
//             <table>
//                 <tbody>
//                     <tr>
//                         <td valign="top" width="180">
//                             <Navigation cid={cid} />
//                         </td>
//                         <td valign="top" width="70%">
//                             <div id="wd-assignments-editor">
//                                 {/* Form starts here */}
//                                 <form>
//                                     <label htmlFor="wd-name"><b>Assignment Name</b></label>
//                                     <br /><br />
//                                     <input id="wd-name" /><br /><br />

//                                     <textarea id="wd-description" rows={10} cols={40} defaultValue={"The assignment is available online Submit a link to the landing page of your Web application running on Vercle. The landing page should have included: Your name, a link to your GitHub repository, and a link to your live application."}>
                                       
//                                     </textarea>
//                                     <br /><br />

//                                     <table>
//                                         <tbody>
//                                             <tr>
//                                                 <td align="center" valign="top">
//                                                     <label htmlFor="wd-points"><b>Points</b></label>
//                                                 </td>
//                                                 <td align="center" valign="top">
//                                                     <input id="wd-points" defaultValue={100} />
//                                                     <br /><br />
//                                                 </td>
//                                             </tr>
//                                             <tr>
//                                                 <td align="center" valign="top">
//                                                     <label id="wd-group"><b>Assignment Group</b></label>
//                                                 </td>
//                                                 <td align="center" valign="top">
//                                                     <select id="wd-group" name="group">
//                                                         <option value="assignments">ASSIGNMENTS</option>
//                                                         <option value="quizzes">QUIZZES</option>
//                                                         <option value="exams">EXAMS</option>
//                                                         <option value="projects">PROJECTS</option>
//                                                     </select>
//                                                     <br /><br />
//                                                 </td>
//                                             </tr>
//                                             <tr>
//                                                 <td align="center" valign="top">
//                                                     <label id="wd-display-grade"><b>Display Grade as</b></label><br />
//                                                 </td>
//                                                 <td align="center" valign="top">
//                                                     <select id="wd-display-grade" name="displayGrade">
//                                                         <option value="percentage">Percentage</option>
//                                                         <option value="points">Points</option>
//                                                         <option value="letter">Letter Grade</option>
//                                                         <option value="gpa">GPA Scale</option>
//                                                     </select>
//                                                     <br /><br />
//                                                 </td>
//                                             </tr>
//                                             <tr>
//                                                 <td align="center" valign="top">
//                                                     <label id="wd-submission-type"><b>Submission Type</b></label><br />
//                                                 </td>
//                                                 <td align="center" valign="top">
//                                                     <select id="wd-submission-type" name="submissionType">
//                                                         <option value="online">Online</option>
//                                                         <option value="on-paper">On Paper</option>
//                                                         <option value="none">No Submission</option>
//                                                     </select>
//                                                     <br /><br />
//                                                 </td>
//                                             </tr>
//                                             <tr>
//                                                 <td></td>
//                                                 <td align="left" valign="top">
//                                                     <b>Online Entry Options</b><br />
//                                                     <input type="checkbox" id="wd-entry-text" /> <label htmlFor="wd-entry-text">Text Entry</label><br />
//                                                     <input type="checkbox" id="wd-entry-url" /> <label htmlFor="wd-entry-url">Website URL</label><br />
//                                                     <input type="checkbox" id="wd-entry-media" /> <label htmlFor="wd-entry-media">Media Recordings</label><br />
//                                                     <input type="checkbox" id="wd-entry-annotation" /> <label htmlFor="wd-entry-annotation">Student Annotation</label><br />
//                                                     <input type="checkbox" id="wd-entry-upload" /> <label htmlFor="wd-entry-upload">File Uploads</label><br /><br />
//                                                 </td>
//                                             </tr>
//                                             <tr>
//                                                 <td></td>
//                                                 <td align="left" valign="top">
//                                                     <label htmlFor="wd-due"><b>Due</b></label><br />
//                                                     <input id="wd-due" type="date" /><br /><br />
//                                                 </td>
//                                             </tr>
//                                             <tr>
//                                                 <td></td>
//                                                 <td>
//                                                     <label htmlFor="wd-available"><b>Available from</b></label><br />
//                                                     <input id="wd-available" type="date" /><br /><br />
//                                                 </td>
//                                                 <td>
//                                                     <label htmlFor="wd-until"><b>Until</b></label><br />
//                                                     <input id="wd-until" type="date" /><br /><br />
//                                                 </td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                     <button type="submit">Save</button>
//                                     <button type="button">Cancel</button>
//                                 </form>
//                             </div>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// }

'use client';

import { use } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = use(params);

  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form>
        {/* Assignment Name */}
        <div className="mb-3">
          <Form.Label htmlFor="wd-name">
            <strong>Assignment Name</strong>
          </Form.Label>
          <Form.Control id="wd-name" type="text" defaultValue="A1" />
        </div>

        {/* Description */}
        <div className="mb-3">
          <Form.Label htmlFor="wd-description">
            <strong>Description</strong>
          </Form.Label>
          <Form.Control
            as="textarea"
            id="wd-description"
            rows={10}
            defaultValue={`The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
          />
        </div>

        {/* Points */}
        <Row className="mb-3">
          <Form.Label column sm={3} htmlFor="wd-points" className="text-end">
            Points
          </Form.Label>
          <Col sm={9}>
            <Form.Control id="wd-points" type="number" defaultValue={100} />
          </Col>
        </Row>

        {/* Assignment Group */}
        <Row className="mb-3">
          <Form.Label column sm={3} htmlFor="wd-group" className="text-end">
            Assignment Group
          </Form.Label>
          <Col sm={9}>
            <Form.Select id="wd-group" defaultValue="assignments">
              <option value="assignments">ASSIGNMENTS</option>
              <option value="quizzes">QUIZZES</option>
              <option value="exams">EXAMS</option>
              <option value="projects">PROJECTS</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Display Grade as */}
        <Row className="mb-3">
          <Form.Label column sm={3} htmlFor="wd-display-grade" className="text-end">
            Display Grade as
          </Form.Label>
          <Col sm={9}>
            <Form.Select id="wd-display-grade" defaultValue="percentage">
              <option value="percentage">Percentage</option>
              <option value="points">Points</option>
              <option value="letter">Letter Grade</option>
              <option value="gpa">GPA Scale</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Submission Type */}
        <Row className="mb-3">
          <Form.Label column sm={3} htmlFor="wd-submission-type" className="text-end">
            Submission Type
          </Form.Label>
          <Col sm={9}>
            <div className="border rounded p-3">
              <Form.Select id="wd-submission-type" defaultValue="online" className="mb-3">
                <option value="online">Online</option>
                <option value="on-paper">On Paper</option>
                <option value="none">No Submission</option>
              </Form.Select>

              <div>
                <strong className="mb-2 d-block">Online Entry Options</strong>
                <Form.Check type="checkbox" id="wd-entry-text" label="Text Entry" className="mb-2" />
                <Form.Check type="checkbox" id="wd-entry-url" label="Website URL" defaultChecked className="mb-2" />
                <Form.Check type="checkbox" id="wd-entry-media" label="Media Recordings" className="mb-2" />
                <Form.Check type="checkbox" id="wd-entry-annotation" label="Student Annotation" className="mb-2" />
                <Form.Check type="checkbox" id="wd-entry-upload" label="File Uploads" />
              </div>
            </div>
          </Col>
        </Row>

        {/* Assign */}
        <Row className="mb-3">
          <Form.Label column sm={3} className="text-end">
            Assign
          </Form.Label>
          <Col sm={9}>
            <div className="border rounded p-3">
              <div className="mb-3">
                <Form.Label htmlFor="wd-assign-to">
                  <strong>Assign to</strong>
                </Form.Label>
                <Form.Control id="wd-assign-to" type="text" defaultValue="Everyone" />
              </div>

              <div className="mb-3">
                <Form.Label htmlFor="wd-due-date">
                  <strong>Due</strong>
                </Form.Label>
                <Form.Control id="wd-due-date" type="datetime-local" defaultValue="2024-05-13T23:59" />
              </div>

              <Row>
                <Col md={6}>
                  <div className="mb-3">
                    <Form.Label htmlFor="wd-available-from">
                      <strong>Available from</strong>
                    </Form.Label>
                    <Form.Control id="wd-available-from" type="datetime-local" defaultValue="2024-05-06T00:00" />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <Form.Label htmlFor="wd-available-until">
                      <strong>Until</strong>
                    </Form.Label>
                    <Form.Control id="wd-available-until" type="datetime-local" defaultValue="2024-05-16T00:00" />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Action Buttons */}
        <hr />
        <div className="d-flex justify-content-end gap-2">
          <Button variant="secondary" type="button">
            Cancel
          </Button>
          <Button variant="danger" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
