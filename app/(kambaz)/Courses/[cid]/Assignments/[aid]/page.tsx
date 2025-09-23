import Navigation from "../../Navigation";

export default function Assignments({ params }: { params: Record<string, string> }) {
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
                            <div id="wd-assignments-editor">
                                {/* Form starts here */}
                                <form>
                                    <label htmlFor="wd-name"><b>Assignment Name</b></label>
                                    <br /><br />
                                    <input id="wd-name" /><br /><br />

                                    <textarea id="wd-description" rows={10} cols={40} defaultValue="A1 - ENV + HTML">
                                        The assignment is available online Submit a link to the landing page of
                                        your Web application running on Vercle. The landing page should have included: Your name,
                                        a link to your GitHub repository, and a link to your live application.
                                    </textarea>
                                    <br /><br />

                                    <table>
                                        <tbody>
                                            <tr>
                                                <td align="center" valign="top">
                                                    <label htmlFor="wd-points"><b>Points</b></label>
                                                </td>
                                                <td align="center" valign="top">
                                                    <input id="wd-points" defaultValue={100} />
                                                    <br /><br />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" valign="top">
                                                    <label id="wd-group"><b>Assignment Group</b></label>
                                                </td>
                                                <td align="center" valign="top">
                                                    <select id="wd-group" name="group">
                                                        <option value="assignments">ASSIGNMENTS</option>
                                                        <option value="quizzes">QUIZZES</option>
                                                        <option value="exams">EXAMS</option>
                                                        <option value="projects">PROJECTS</option>
                                                    </select>
                                                    <br /><br />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" valign="top">
                                                    <label id="wd-display-grade"><b>Display Grade as</b></label><br />
                                                </td>
                                                <td align="center" valign="top">
                                                    <select id="wd-display-grade" name="displayGrade">
                                                        <option value="percentage">Percentage</option>
                                                        <option value="points">Points</option>
                                                        <option value="letter">Letter Grade</option>
                                                        <option value="gpa">GPA Scale</option>
                                                    </select>
                                                    <br /><br />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" valign="top">
                                                    <label id="wd-submission-type"><b>Submission Type</b></label><br />
                                                </td>
                                                <td align="center" valign="top">
                                                    <select id="wd-submission-type" name="submissionType">
                                                        <option value="online">Online</option>
                                                        <option value="on-paper">On Paper</option>
                                                        <option value="none">No Submission</option>
                                                    </select>
                                                    <br /><br />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td align="left" valign="top">
                                                    <b>Online Entry Options</b><br />
                                                    <input type="checkbox" id="wd-entry-text" /> <label htmlFor="wd-entry-text">Text Entry</label><br />
                                                    <input type="checkbox" id="wd-entry-url" /> <label htmlFor="wd-entry-url">Website URL</label><br />
                                                    <input type="checkbox" id="wd-entry-media" /> <label htmlFor="wd-entry-media">Media Recordings</label><br />
                                                    <input type="checkbox" id="wd-entry-annotation" /> <label htmlFor="wd-entry-annotation">Student Annotation</label><br />
                                                    <input type="checkbox" id="wd-entry-upload" /> <label htmlFor="wd-entry-upload">File Uploads</label><br /><br />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td align="left" valign="top">
                                                    <label htmlFor="wd-due"><b>Due</b></label><br />
                                                    <input id="wd-due" type="date" /><br /><br />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>
                                                    <label htmlFor="wd-available"><b>Available from</b></label><br />
                                                    <input id="wd-available" type="date" /><br /><br />
                                                </td>
                                                <td>
                                                    <label htmlFor="wd-until"><b>Until</b></label><br />
                                                    <input id="wd-until" type="date" /><br /><br />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button type="submit">Save</button>
                                    <button type="button">Cancel</button>
                                </form>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
