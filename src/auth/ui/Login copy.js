import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import doSubmit from "../bloc/LoginBloc";
export default function Login() {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const isLogin = doSubmit({ password, email });
    if (isLogin) {
      history.push("/dashboard");
    }
  };
  return (
    <main className="authmain">
      <form onSubmit={handleSubmit}>
        <div className="header">
          <h3>Message! of whatsover here</h3>
          <div className="mobile">
            {/* <object data="../static/images/logo 1.svg" type /> */}
            <h2>Message of whatever here</h2>
          </div>
        </div>
        <div className="main-form">
          <div className="field">
            <label htmlFor="email">Testing</label>
            <input
              type="email"
              placeholder="testing"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button>Login</button>
        <div className="question">
          <Link to="#">Create account</Link>
          <Link to="#">
            <span>/</span> Forgot Password
          </Link>
          {/* <Link to="#">Already have an account?</Link> */}
        </div>
      </form>
    </main>
  );
}
