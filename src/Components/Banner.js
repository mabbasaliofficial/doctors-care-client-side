import React from "react";
import { Link } from "react-router-dom";
import '../Assets/style.css'

const Banner = () => {

  return (
    <div className="w-11/12 mx-auto mt-10 mb-10">
      <div class="banner-container">
            <h1 className="text-7xl text-secondary font-extrabold mb-10">Meet Our Heart <br /> Specialists</h1>
            
            <Link to={`/contactus`} className="btn btn-primary">Contact Now</Link>
        </div>

    </div>
  )
};

export default Banner;
