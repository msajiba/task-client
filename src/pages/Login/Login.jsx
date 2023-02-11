import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAdmin from "../../hooks/useAdmin";
import Loader from "../Shared/Loader/Loader";
import styleCss from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const [admin, isLoading] = useAdmin(user);
  isLoading && <Loader />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = { email, password };
      const URL = "http://localhost:5000/api/user/login";
      const { data } = await axios.post(URL, user);

      setUser(data?.user);

      if (data?.status) {
        toast.success(data?.message);
        e.target.reset();
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      if (!error?.response?.data?.status) {
        toast.error(error?.response?.data?.message);
      }
    }

    if (admin) {
      console.log("dashboard");
    }
  };

  if (admin) {
    navigate("/dashboard");
  }

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
                minLength="6"
                maxLength="10"
                required
              />
            </div>

            <Link to="#" className={styleCss.forget}>
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
