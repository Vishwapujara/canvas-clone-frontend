"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import { ListGroup, ListGroupItem, Button, Row, Col, Form } from "react-bootstrap";

export default function AssignmentsPage() {
  const { cid } = useParams() as { cid?: string };
  const assignments = (db as any).assignments || [];
  const [search, setSearch] = useState("");

  const courseAssignments = assignments
    .filter((a: any) => a.course === cid)
    .filter((a: any) => a.title.toLowerCase().includes(search.trim().toLowerCase()));

  return (
    <div id="wd-assignments-page">
      <h1><b>Course {cid}</b></h1>
      <hr />
      <Row>
        {/* removed left navigation column (navigation is provided by the layout) */}
        <Col md={12} sm={12}>
          <div id="wd-assignments">
            <Form.Control
              placeholder="Search for Assignments"
              id="wd-search-assignment"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-2"
            />

            <div className="mb-3">
              <Button id="wd-add-assignment-group" size="sm" className="me-2">+ Group</Button>
              <Button id="wd-add-assignment" size="sm" variant="primary">+ Assignment</Button>
            </div>

            <h3 id="wd-assignments-title">
              ASSIGNMENTS <small className="text-muted">({courseAssignments.length})</small>
            </h3>

            <ListGroup id="wd-assignment-list" className="mt-3">
              {courseAssignments.map((a: any) => (
                <ListGroupItem key={a.id} className="wd-assignment-list-item p-3">
                  <Link href={`/Courses/${cid}/Assignments/${a.id}`} className="wd-assignment-link h5 text-decoration-none">
                    {a.title}
                  </Link>
                  <div className="text-muted mt-1">
                    Multiple Modules | <b>Due</b> {a.due} | <b>Points</b> {a.maxPoints}
                  </div>
                </ListGroupItem>
              ))}

              {courseAssignments.length === 0 && (
                <div className="text-muted p-3">No assignments for this course.</div>
              )}
            </ListGroup>
          </div>
        </Col>
      </Row>
    </div>
  );
}
