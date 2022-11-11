import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const TreatmentCard = ({treatment}) => {
    const {_id, image, title, description, price} =treatment;
    return (
        <div className="card w-80 bg-base-100 shadow-xl  border border-purple-400">
  <figure> <PhotoProvider>
      <div className="foo">
   
          <PhotoView src={image}>
            <img src={image} alt="" />
          </PhotoView>
       
      </div>
    </PhotoProvider></figure>
  <div className="card-body p-5">
    <h2 className="card-title">{title}</h2>
    <p>{description.length > 100 ? <p>{description.slice(0, 100) + '...'} <Link to={`/services/${_id}`} className='text-blue-400'>Read More</Link></p> : <p>{description}</p>}</p>
    <p className='font-bold text-orange-600'>Price : ${price}</p>
    <div className="card-actions justify-end">
      <Link to={`/services/${_id}`} className="btn btn-primary">View Details</Link>
    </div>
  </div>
</div>
    );
};

export default TreatmentCard;