import React, { useState } from "react";
import { Link } from "react-router-dom";
import styleCss from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    console.log(user);
    e.target.reset();
  };

  return (
    <div className={styleCss.container}>
      <div className={styleCss.main}>
        <h3 className={styleCss.title}>Login</h3>

        <div className={styleCss.input_container}>
          <form onSubmit={handleSubmit}>
            <div className={styleCss.input_section}>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                required
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter Your password"
                required
              />
            </div>

            <Link to="#" className={styleCss.forget} >
              <small> Forget password</small>
            </Link>

            <div className={styleCss.submit}>
              <button className={styleCss.btn}>Sing In</button>
            </div>
          </form>

          <Link className={styleCss.link} to="/register">
            <small> Create Account</small>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
