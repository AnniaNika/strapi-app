import React from "react";

const Signup = () => {
  const axios = require("axios").default;
  const handleSubmit = (e) => {
    const form = e.target;
    console.log("Form -->", form);
    e.preventDefault();
    axios({
      method: "post",
      url: "https://eventure.thinkplus.dev/api/auth/local/register",
      data: new FormData(form),
    })
      .then((r) => {
        console.log(true, "Thanks!", form);
      })
      .catch((r) => {
        console.log(false, r.response.data.error, form);
      });
  };
  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="username">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
      </div>

      <div className="email">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div className="password">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
      </div>

      <div className="confirm-password">
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          required
        />
      </div>

      <input type="submit" value="Submit" />
    </form>
  );
};

export default Signup;
