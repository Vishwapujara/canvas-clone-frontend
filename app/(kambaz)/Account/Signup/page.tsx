// import Link from "next/link";
// export default function Signup() {
//   return (
//     <div id="wd-signup-screen">
//       <h3>Sign up</h3>
//       <input placeholder="username" className="wd-username" /><br/>
//       <input placeholder="password" type="password" className="wd-password" /><br/>
//       <input placeholder="verify password"
//              type="password" className="wd-password-verify" /><br/>
//       <Link  href="Profile" > Sign up </Link><br />
//       <Link  href="Signin" > Sign in </Link>
//     </div>
// );}


import Link from "next/link";
import { Form } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen" style={{ maxWidth: '400px' }}>
      <h1>Sign up</h1>
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
        <Form.Control
          id="wd-password-verify"
          placeholder="verify password"
          type="password"
          className="mb-2 wd-password-verify"
        />
        <Link
          id="wd-signup-btn"
          href="/Account/Profile"
          className="btn btn-primary w-100 mb-2"
        >
          Sign up
        </Link>
        <Link id="wd-signin-link" href="/Account/Signin">
          Sign in
        </Link>
      </Form>
    </div>
  );
}