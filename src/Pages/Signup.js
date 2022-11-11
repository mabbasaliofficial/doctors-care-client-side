import colorNames from 'daisyui/src/colors/colorNames';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const Signup = () => {
    const {createUser} = useContext(AuthContext) 
    const signupHandler = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.error(error)
        })
        
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
                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="Password" className="input input-bordered" />
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