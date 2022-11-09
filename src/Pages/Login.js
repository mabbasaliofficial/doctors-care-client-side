import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const loginHandler = event => {
        event.preventDefault()
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="card w-96 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
          <div className="text-center">
          <h1 className="text-5xl font-bold mb-10 mt-0">Login now!</h1>
        </div>
        <form onSubmit={loginHandler}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="Email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="Password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
                <input className="btn" type="submit" value="Login" />
            </div>
        </form>
        <span className="">New to Prescription? <Link className="text-primary" to='/signup'>Sign Up</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
