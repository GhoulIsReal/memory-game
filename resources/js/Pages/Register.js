import React, { Fragment } from "react";
import { Inertia } from "@inertiajs/inertia";

const Register = props => {
  const { errors } = props;
  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
      password_confirmation: e.target.password_confirmation.value
    };

    Inertia.post("/register", data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        required
        pattern="(^([a-zA-Z]+)(\d+)?$)"
      />
      {errors.username && (
        <p>
          <code>{errors.username}</code>
        </p>
      )}
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required />
      <label htmlFor="password_confirmation">Password confirmation</label>
      <input
        type="password"
        id="password_confirmation"
        name="password_confirmation"
        required
      />
      {errors.password && (
        <p>
          <code>{errors.password}</code>
        </p>
      )}
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
