import { Inertia } from "@inertiajs/inertia";
import React, { Fragment } from "react";

const Login = props => {
  const { errors } = props;
  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value
    };

    Inertia.post("/login", data);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div
        style={{
          marginBottom: "1rem"
        }}
      >
        <a href="/register">Not registered?</a>
      </div>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" required autoFocus />
      {errors.username && (
        <p>
          <code>{errors.username}</code>
        </p>
      )}
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required />
      {errors.password && (
        <p>
          <code>{errors.password}</code>
        </p>
      )}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
