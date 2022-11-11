import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail, HiLocationMarker } from "react-icons/hi";

const ContactUs = () => {
    return (
<div  className=' bg-base-200 py-10'>
    <h1 className='text-center text-4xl font-bold'>Contact Us</h1>
    <p className='text-center'>Any Question or Remarks? Just Write Us a Message!
    </p>
<div className="hero min-h-screen">
  <div className="hero-content flex-col justify-center lg:flex-row">
    <div className="max-w-sm rounded-lg shadow-2xl w-80 h-96 bg-primary ">
        <h1 className='text-xl font-bold text-center mt-5 text-white'>Contact Information</h1>
        <p className='p-5 text-white'>Fill up the form and Our team wil get back to you within 24 hours.</p>
        <div className='flex items-center ml-5 mt-5'>
        <FaPhoneAlt className='text-white mx-1'></FaPhoneAlt>
        <span className='text-white mx-1'> +880 1511 694 246</span>
        </div>
        <div className='flex items-center mt-5 ml-5'>
        <HiMail className='text-white mx-1'></HiMail>
        <span className='text-white mx-1'>dr.alrazi@gmail.com</span>
        </div>
        <div className='flex items-center mt-5 ml-5'>
        <HiLocationMarker className='text-white mx-1'></HiLocationMarker>
        <span className='text-white mx-1'>102 Street, 2344 Dhaka</span>
        </div>
        <div className="flex justify-center items-center mt-16 text-white">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current mx-2"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current mx-2"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current mx-2"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
    </div>
    <div>
    <div className='flex'>
    <div className="form-control mx-2">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control mx-2">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="Email" className="input input-bordered" />
        </div>
    </div>
        <div className='flex '>
        <div className="form-control mx-2">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input type="text" placeholder="Address" className="input input-bordered" />
        </div>
        <div className="form-control mx-2">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input type="text" placeholder="Phone" className="input input-bordered" />
        </div>
        </div>
        <div className="form-control mx-2">
  <label className="label">
    <span className="label-text">Your Message</span>
  </label> 
  <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
</div>
      <button className="btn btn-secondary mt-10 mx-2">
        Send Message
      </button>
    </div>
  </div>
</div>
</div>
    );
};

export default ContactUs;