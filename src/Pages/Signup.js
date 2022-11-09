import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const signupHandler = event => {
        event.preventDefault()
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="card w-96 max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <div className="text-center">
            <h1 className="text-5xl font-bold mb-10 mt-0">Sign Up</h1>
          </div>
          <form onSubmit={signupHandler}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered" />
              </div>
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
              </div>
              <div className="form-control mt-6">
                  <input className="btn" type="submit" value="Signup" />
              </div>
          </form>
          <span className="">Already have an account? <Link className="text-primary" to='/login'>Log In</Link></span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Signup;