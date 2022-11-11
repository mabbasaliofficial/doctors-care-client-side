import React from "react";
import { useLoaderData } from "react-router-dom";
import TreatmentCard from "../Components/TreatmentCard";

const ServicePages = () => {
  const treatments = useLoaderData();
  console.log(typeof treatments);
  return (
    <div className="mx-24 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
      {treatments.map((treatment) => (
        <TreatmentCard key={treatment._id} treatment={treatment}></TreatmentCard>
      ))}
    </div>
  );
};

export default ServicePages;
