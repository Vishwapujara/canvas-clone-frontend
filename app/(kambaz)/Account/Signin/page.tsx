// import Link from "next/link";
// export default function Signin() {
//  return (
//    <div id="wd-signin-screen">
//      <h3>Sign in</h3>
//      <input placeholder="username" className="wd-username" /> <br />
//      <input placeholder="password" type="password" className="wd-password" /> <br />
//      <Link href="Profile" id="wd-signin-btn"> Sign in </Link> <br />
//      <Link href="Signup" id="wd-signup-link"> Sign up </Link>
//    </div>
// );}

import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Signin() {
  return (
    <div id="wd-signin-screen" style={{ maxWidth: '400px' }}>
      <h1>Sign in</h1>
      <Form>
        <Form.Control
          id="wd-username"
          placeholder="username"
          className="mb-2 wd-username"
        />
        <Form.Control
          id="wd-password"
          placeholder="password"
          type="password"
          className="mb-2 wd-password"
        />
        <Link
          id="wd-signin-btn"
          href="/Account/Profile"
          className="btn btn-primary w-100 mb-2"
        >
          Sign in
        </Link>
        <Link id="wd-signup-link" href="/Account/Signup">
          Sign up
        </Link>
      </Form>
    </div>
  );
}