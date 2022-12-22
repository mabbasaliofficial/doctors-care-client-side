import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import TreatmentCard from "../Components/TreatmentCard";
import { AuthContext } from "../Contexts/UserContext";
import useTitle from "../Hooks/useTitle";


const ServicePages = () => {
  const {loading} = useContext(AuthContext)
    useTitle('Services')
  const treatments = useLoaderData();
  if(loading){
    return <progress className="progress progress-primary"></progress>
  }
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center">All Services</h1>
      <div className="mx-24 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-10">
      {treatments.map((treatment) => (
        <TreatmentCard key={treatment._id} treatment={treatment}></TreatmentCard>
      ))}
      </div>
    </div>
  );
};

export default ServicePages;
