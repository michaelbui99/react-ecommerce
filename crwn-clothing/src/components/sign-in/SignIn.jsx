import { useState, useEffect } from "react";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "email") {
      setEmail(value);
    }

    if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          required
        />

        <input type="submit" value="Submit form" />
      </form>
    </div>
  );
};

export default SignIn;
