"use client";

import Link from "next/link";
import { Form } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" style={{ maxWidth: "400px" }}>
      <h1>Profile</h1>

      <Form>
        <div className="mb-3">
          <Form.Label htmlFor="wd-username">Username</Form.Label>
          <Form.Control
            id="wd-username"
            defaultValue="alice"
            placeholder="username"
            className="wd-username"
          />
        </div>

        <div className="mb-3">
          <Form.Label htmlFor="wd-password">Password</Form.Label>
          <Form.Control
            id="wd-password"
            type="password"
            defaultValue="123"
            placeholder="password"
            className="wd-password"
          />
        </div>

        <div className="mb-3">
          <Form.Label htmlFor="wd-firstname">First Name</Form.Label>
          <Form.Control
            id="wd-firstname"
            defaultValue="Alice"
            placeholder="First Name"
          />
        </div>

        <div className="mb-3">
          <Form.Label htmlFor="wd-lastname">Last Name</Form.Label>
          <Form.Control
            id="wd-lastname"
            defaultValue="Wonderland"
            placeholder="Last Name"
          />
        </div>

        <div className="mb-3">
          <Form.Label htmlFor="wd-dob">Date of Birth</Form.Label>
          <Form.Control
            id="wd-dob"
            type="date"
            defaultValue="2000-01-01"
          />
        </div>

        <div className="mb-3">
          <Form.Label htmlFor="wd-email">Email</Form.Label>
          <Form.Control
            id="wd-email"
            type="email"
            defaultValue="alice@wonderland"
          />
        </div>

        <div className="mb-3">
          <Form.Label htmlFor="wd-role">Role</Form.Label>
          <Form.Select id="wd-role" defaultValue="FACULTY">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </Form.Select>
        </div>

        <Link
          id="wd-signout-btn"
          href="/Account/Signin"
          className="btn btn-danger w-100"
        >
          Sign out
        </Link>
      </Form>
    </div>
  );
}
