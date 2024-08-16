import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const Login = () => {

  const navigate = useNavigate();

  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");

  const userNameChangedHandler = (e) => {
    setUserName(e.target.value);
  }
  const passwordChangedHandler = (e) => {
    setPassword(e.target.value);
  }

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    const login = async() => {
        const fetchData = await fetch("http://localhost:8083/api/v1/user/login",{
          method:"POST",
          body : JSON.stringify({
            userName,
            password
          }),
          headers : {
            "Content-Type": "application/json",
          }
        })
        .then(res => console.log(res.data))
    }
login();
  }

  return (
    <form className="p-4"
    onSubmit={loginSubmitHandler}
    style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
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
            value={password}/>
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