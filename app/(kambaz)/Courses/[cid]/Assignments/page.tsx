// 'use client'; // <- Added: Ensures this component runs on client to avoid hydration errors

// import { useState } from 'react';
// import Navigation from "../Navigation";

// export default function Assignments({ params }: { params: Record<string, string> }) {
//     const { cid } = params;

//     // Interactive states moved here to avoid hydration mismatch
//     const [search, setSearch] = useState("");

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
//                             {/* ====== Interactive Elements Start ====== */}
//                             <div id="wd-assignments">
//                                 <input
//                                     placeholder="Search for Assignments"
//                                     id="wd-search-assignment"
//                                     value={search} // <- Added: controlled input
//                                     onChange={(e) => setSearch(e.target.value)} // <- Added: update state
//                                 />
//                                 <button id="wd-add-assignment-group">+ Group</button>
//                                 <button id="wd-add-assignment">+ Assignment</button>
//                                 <h3 id="wd-assignments-title">
//                                     ASSIGNMENTS 40% of Total <button>+</button>
//                                 </h3>
//                                 <ul id="wd-assignment-list">
//                                     <li className="wd-assignment-list-item1">
//                                         <a href={`/Courses/${cid}/Assignments/${cid}`}
//                                             className="wd-assignment-link">
//                                             A1 - ENV + HTML
//                                         </a>
//                                         <br />
//                                         Multiple Modules | <b>Not available until</b> May 6 at 12:00 AM |
//                                         <b>Due</b> May 13 at 11:59 PM | <b>Points</b> 10 pts
//                                     </li>
//                                     <br /><br />

//                                     <li className="wd-assignment-list-item2">
//                                         <a href={`/Courses/${cid}/Assignments/${cid}`}
//                                             className="wd-assignment-link">
//                                             A2 - CSS + BOOTSTRAP
//                                         </a>
//                                         <br />
//                                         Multiple Modules | <b>Not available until</b> May 13 at 12:00 AM |
//                                         <b>Due</b> May 20 at 11:59 PM | <b>Points</b> 20 pts
//                                     </li>
//                                     <br /><br />

//                                     <li className="wd-assignment-list-item3">
//                                         <a href={`/Courses/${cid}/Assignments/${cid}`}
//                                             className="wd-assignment-link">
//                                             A3 - JAVASCRIPT + REACT
//                                         </a>
//                                         <br />
//                                         Multiple Modules | <b>Not available until</b> May 20 at 12:00 AM |
//                                         <b>Due</b> May 27 at 11:59 PM | <b>Points</b> 20 pts
//                                     </li>
//                                 </ul>
//                             </div>
//                             {/* ====== Interactive Elements End ====== */}
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// }

'use client';

import { use, useState } from 'react';
import { Button, Form, InputGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import { BsGripVertical, BsPlus, BsSearch } from 'react-icons/bs';
import { IoEllipsisVertical } from 'react-icons/io5';
import { FaCheckCircle } from 'react-icons/fa';
import { MdOutlineAssignment } from 'react-icons/md';

export default function Assignments({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = use(params);
  const [search, setSearch] = useState("");

  return (
    <div id="wd-assignments">
      {/* Controls Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <InputGroup style={{ width: '300px' }}>
          <InputGroup.Text className="bg-white">
            <BsSearch />
          </InputGroup.Text>
          <Form.Control
            id="wd-search-assignment"
            placeholder="Search for Assignments"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>
        
        <div>
          <Button 
            variant="secondary" 
            className="me-2"
            id="wd-add-assignment-group"
          >
            <BsPlus className="fs-4" /> Group
          </Button>
          <Button 
            variant="danger"
            id="wd-add-assignment"
          >
            <BsPlus className="fs-4" /> Assignment
          </Button>
        </div>
      </div>

      {/* Assignments List */}
      <ListGroup className="rounded-0">
        <ListGroupItem className="p-0 mb-5 fs-5 border-gray">
          {/* Header */}
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
            </div>
            <div className="d-flex align-items-center">
              <span className="badge rounded-pill border border-dark me-2">
                40% of Total
              </span>
              <BsPlus className="fs-4" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>

          {/* Assignment Items */}
          <ListGroup className="rounded-0">
            {/* A1 */}
            <ListGroupItem className="wd-assignment-list-item p-3 ps-1 d-flex justify-content-between align-items-start">
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment className="me-3 fs-3 text-success" />
                <div>
                  <a 
                    href={`/Courses/${cid}/Assignments/A1`}
                    className="wd-assignment-link text-decoration-none text-dark fw-bold"
                  >
                    A1 - ENV + HTML
                  </a>
                  <div className="text-muted small">
                    <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am |
                    <br />
                    <b>Due</b> May 13 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-2" />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </ListGroupItem>

            {/* A2 */}
            <ListGroupItem className="wd-assignment-list-item p-3 ps-1 d-flex justify-content-between align-items-start">
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment className="me-3 fs-3 text-success" />
                <div>
                  <a 
                    href={`/Courses/${cid}/Assignments/A2`}
                    className="wd-assignment-link text-decoration-none text-dark fw-bold"
                  >
                    A2 - CSS + BOOTSTRAP
                  </a>
                  <div className="text-muted small">
                    <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am |
                    <br />
                    <b>Due</b> May 20 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-2" />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </ListGroupItem>

            {/* A3 */}
            <ListGroupItem className="wd-assignment-list-item p-3 ps-1 d-flex justify-content-between align-items-start">
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment className="me-3 fs-3 text-success" />
                <div>
                  <a 
                    href={`/Courses/${cid}/Assignments/A3`}
                    className="wd-assignment-link text-decoration-none text-dark fw-bold"
                  >
                    A3 - JAVASCRIPT + REACT
                  </a>
                  <div className="text-muted small">
                    <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am |
                    <br />
                    <b>Due</b> May 27 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-2" />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
