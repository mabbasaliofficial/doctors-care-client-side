
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";
import useTitle from "../Hooks/useTitle";

const Login = () => {
  useTitle('Login')
  const navigate = useNavigate()
  const {signInUser} = useContext(AuthContext)
    const loginHandler = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
        .then(result =>{
          const user = result.user;
          console.log(user)
          toast.success(`Login successfully`)
          navigate(`/`)
        })
        .then(error =>{
          console.error(error)
        })

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
              <input type="email" name="email" placeholder="Email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="Password" className="input input-bordered" />
             
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
