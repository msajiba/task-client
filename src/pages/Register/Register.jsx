import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styleCss from "./Register.module.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { firstName, lastName, email, password };

    const URL = "http://localhost:5000/api/user";
    const { data } = await axios.post(URL, user);

    if (data?.status) {
      toast.success(data?.message);
      e.target.reset();
    } else {
      toast.error(data?.message);
    }
  };

  return (
    <div className={styleCss.container}>
      <div className={styleCss.main}>
        <h3 className={styleCss.title}>Register Your Account</h3>

        <div className={styleCss.input_container}>
          <form onSubmit={handleSubmit}>
            <div className={styleCss.input_section}>
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter Your First Name"
                required
              />
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Enter Your Last Name"
                required
              />
            </div>

            <div className={styleCss.input_section}>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                required
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="Enter Your password"
                minLength="6"
                maxLength="10"
                required
              />
            </div>

            <div className={styleCss.submit}>
              <button className={styleCss.btn}>Sing Up</button>
            </div>
          </form>

          <Link className={styleCss.link} to="/login">
            <small> Login </small>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
