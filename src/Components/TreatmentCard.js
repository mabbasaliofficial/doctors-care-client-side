import React from 'react';
import { Link } from 'react-router-dom';

const TreatmentCard = ({treatment}) => {
    const {id, image, title, description, price} =treatment;
    return (
        <div className="card w-80 bg-base-100 shadow-xl  border border-purple-400">
  <figure><img src={image} alt="" className='w-full h-60' /></figure>
  <div className="card-body p-5">
    <h2 className="card-title">{title}</h2>
    <p>{description.length > 100 ? <p>{description.slice(0, 100) + '...'} <Link to={`/course/${id}`} className='text-blue-400'>Read More</Link></p> : <p>{description}</p>}</p>
    <p className='font-bold text-orange-600'>Price : ${price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    );
};

export default TreatmentCard;