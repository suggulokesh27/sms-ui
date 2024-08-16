import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import postApi from "../Api/postApi";
import { useDispatch } from "react-redux";
import { setUserType, setToken } from "../Store/LoginSlice";



const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameChangedHandler = (e) => {
    setUserName(e.target.value);
  }
  const passwordChangedHandler = (e) => {
    setPassword(e.target.value);
  }

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    const login = async () => {

      const header = {
        "Content-Type": "application/json",
      }
      try {
        const response = await postApi("v1/user/login", header, { userName, password }, 8083)

        const token = response.data.token;
        const userType = response.data.user.userType;
        const orgId = response.data.user.orgId;
        const expirationTime = new Date().getTime() + (60 * 60 * 1000);

        localStorage.setItem('token', token);
        localStorage.setItem('tokenExpiration', expirationTime);
        localStorage.setItem('usertype', userType);
        localStorage.setItem('orgId', orgId);

        console.log('Token stored in localStorage');

        if (token && userType) {
          dispatch(setToken(token));
          navigate("/dashboard")
        } else {
          console.log("token and status is not generated");
          navigate("/")
        }

        console.log(response.data);
      } catch (error) {
        console.error("Error logging in:", error);
      }
    }

    login();
  };

  return (
    <form className="p-4"
      onSubmit={loginSubmitHandler}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <div>
        {/* Email input */}
        <div className="form-outline mb-4">
          <input type="email"
            id="form1Example1"
            className="form-control"
            onChange={userNameChangedHandler}
            value={userName} />
          <label className="form-label" htmlFor="form1Example1">Email address</label>
        </div>

        {/* Password input */}
        <div className="form-outline mb-4">
          <input type="password"
            id="form1Example2"
            className="form-control"
            onChange={passwordChangedHandler}
            value={password} />
          <label className="form-label" htmlFor="form1Example2">Password</label>
        </div>

        {/* 2 column grid layout for inline styling */}
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            {/* Checkbox */}
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
            </div>
          </div>

          <div className="col text-end">
            {/* Simple link */}
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary btn-block">Sign in</button>
      </div>

    </form>
  )
}

export default Login;