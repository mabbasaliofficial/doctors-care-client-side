import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import useTitle from '../Hooks/useTitle';

const DetailsCard = () => {
  const {loading} = useContext(AuthContext)
    const {_id, image, title, description, price} = useLoaderData()
    useTitle('Details')
    if(loading){
      return <progress className="progress w-full"></progress>;
    }
    return (
        <div className="card w-1/3 bg-base-100 mt-10 mb-10 shadow-xl mx-auto border border-primary">
        <figure className="px-10 pt-10">
        <PhotoProvider>
      <div className="foo">
   
          <PhotoView src={image}>
            <img src={image} alt="" />
          </PhotoView>
       
      </div>
    </PhotoProvider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p className='font-bold text-orange-600'>Price : {price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default DetailsCard;