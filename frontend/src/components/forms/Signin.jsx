import React from "react";
import AuthContext from "../../context/AuthContext";
import Cookies from "js-cookie";

const Signin = () => {
  const axios = require("axios").default;
  const { setIsLoggedIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    setLoading(true);
    const form = e.target;
    console.log("Form -->", form);
    e.preventDefault();
    axios({
      method: "post",
      url: "https://eventure.thinkplus.dev/api/auth/local",
      data: new FormData(form),
    })
      .then((r) => {
        const response = r?.data;
        console.log(true, "Thanks!", response);
        setIsLoggedIn(true);
        Cookies.set("jwt", response.jwt);
        Cookies.set("user", [...response.user]);
        setLoading(false);
      })
      .catch((r) => {
        console.log(false, r.response?.data?.error, form);
        setLoading(false);
      });
  };
  return (
    <form className="signin-form" onSubmit={handleSubmit}>
      <div className="email">
        <label htmlFor="identifier">Email:</label>
        <input type="email" id="identifier" name="identifier" required />
      </div>

      <div className="password">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
      </div>

      <input disabled={loading} type="submit" value="Submit" />
    </form>
  );
};

export default Signin;
