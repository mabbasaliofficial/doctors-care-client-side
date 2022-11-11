import React from 'react';
import { FaBriefcaseMedical, FaLaptopMedical, FaClinicMedical } from "react-icons/fa";

const Services = () => {
    return (
        <div className='pt-10 pb-10 bg-gray-200'>
           
            <h1 className='text-3xl mb-5 text-orange-600 font-extrabold text-center'>
            Our Specialty
            </h1>
         <div className='flex justify-center'>
         <div className="card w-80 bg-base-100 mx-2">
  <figure className='py-10'> <FaBriefcaseMedical className='w-full h-20'></FaBriefcaseMedical></figure>
  <div className="card-body">
    <h2 className="card-title">
    MODERN TECHNOLOGY
    </h2>
    <p>From pregnancy tests to ultrasound scans, medical technology is with you from before you are born. If you scratched your knee as a child, you wore a plaster; if your vision blurs, you got glasses.</p>
  </div>
</div>
         <div className="card w-80 bg-base-100 mx-2">
  <figure className='py-10'> <FaLaptopMedical className='w-full h-20'></FaLaptopMedical></figure>
  <div className="card-body">
    <h2 className="card-title">
HEALTHCARE SOLUTIONS
    </h2>
    <p>High-quality health care helps prevent diseases and improve quality of life. Healthy People 2030 focuses on improving quality and making sure all people get the health care services they need.</p>
  </div>
</div>
         <div className="card w-80 bg-base-100 mx-2">
  <figure className='py-10'> <FaClinicMedical className='w-full h-20'></FaClinicMedical></figure>
  <div className="card-body">
    <h2 className="card-title">
    24/7 AVAILABILITY
    </h2>
    <p>Helping health providers communicate more effectively can help improve health. Strategies to make sure health care  recommended services are also key to improving health.</p>
  </div>
</div>
        
         </div>
        </div>
    );
};

export default Services;