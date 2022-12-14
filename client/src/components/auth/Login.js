import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context";
import { useContext } from "react";
import { useInput } from "../hooks/useInput";

import styles from "./Auth.module.css";

export default function Login() {
  const { logIn, setFlashMsg } = useContext(AppContext);

  const [emailProps, resetEmail] = useInput("");
  const [pwProps, resetpw] = useInput("");

  const submit = (e) => {
    e.preventDefault();
    var email = emailProps.value.replace(/\s/g, ""),
      pw = pwProps.value.replace(/\s/g, "");

    if (!email || !email.length) {
      setFlashMsg({ type: "error", message: "Email must not be empty" });
      return;
    }

    if (!pw || !pw.length) {
      setFlashMsg({ type: "error", message: "Password must not be empty" });
      return;
    }
    logIn(email, pw);
    resetEmail();
    resetpw();
  };

  return (
    <div className={`${styles.LoginPage}`}>
      <div className={styles.Left}>
        <strong>
          <h1 className={styles.Title}>Spike Clone</h1>
        </strong>
        <p>Level up your email game</p>
      </div>
      <form className={styles.LoginForm}>
        <h1>Sign in</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          placeholder="Enter email"
          {...emailProps}
        />

        <label htmlFor="pw">Password</label>
        <input
          type="password"
          name="pw"
          id="pw"
          className="form-control"
          placeholder="Enter password"
          {...pwProps}
        />
        {}

        <input
          type="submit"
          value="Sign in"
          className="btn btn-primary"
          onClick={submit}
        />
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}
