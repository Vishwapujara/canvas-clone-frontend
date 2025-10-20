"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import * as db from "../../../../Database";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import React from "react";

function formatDateDDMMYYYY(dateStr?: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams() as { cid?: string; aid?: string };
  const assignments = (db as any).assignments || [];
  const assignment = assignments.find((a: any) => a.id === aid);

  return (
    <div id="wd-assignment-editor">
      <h1>
        <b>Assignment Editor</b>
      </h1>
      <hr />
      <Row>
        <Col md={12}>
          <Card className="p-3">
            <h3 className="mb-3">
              {assignment ? assignment.title : "Assignment not found"}
            </h3>

            {/* Assignment Name */}
            <Form.Group className="mb-3">
              <Form.Label>Assignment Name</Form.Label>
              <Form.Control defaultValue={assignment?.title ?? ""} />
            </Form.Group>

            {/* Preview box with rich description (matches screenshot) */}
            {assignment?.description && (
              <div
                className="border rounded p-3 mb-3"
                style={{ background: "#fff" }}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: assignment.description }}
                />
              </div>
            )}

            {/* Editable Description */}
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                defaultValue={assignment?.description ? "" : ""}
              />
            </Form.Group>

            {/* Points / Due / Available */}
            <Row className="mb-3 align-items-end">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Points</Form.Label>
                  <Form.Control
                    type="number"
                    defaultValue={assignment?.maxPoints ?? 100}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={formatDateDDMMYYYY(assignment?.due)}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Available from</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={formatDateDDMMYYYY(assignment?.available)}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Assign to / Due (box) - placeholder layout to match screenshot */}
            <Row className="mb-3">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Assign to</Form.Label>
                  <Form.Control placeholder="" />
                </Form.Group>
              </Col>
              <Col md={8}>
                <Card className="p-3">
                  <Form.Group className="mb-2">
                    <Form.Label>Due</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={formatDateDDMMYYYY(assignment?.due)}
                    />
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>Available from</Form.Label>
                        <Form.Control
                          type="text"
                          defaultValue={formatDateDDMMYYYY(assignment?.available)}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Until</Form.Label>
                        <Form.Control type="text" defaultValue={""} />
                      </Form.Group>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>

            <div className="mt-3">
              <Link href={`/Courses/${cid}/Assignments`} className="me-2">
                <Button variant="secondary">Cancel</Button>
              </Link>
              <Link href={`/Courses/${cid}/Assignments`}>
                <Button variant="primary">Save</Button>
              </Link>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
