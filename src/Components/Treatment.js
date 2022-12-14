import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";
import TreatmentCard from "./TreatmentCard";

const Treatment = () => {
  const {loading} = useContext(AuthContext)
  const [treatments, setTreatments] = useState([]);
  useEffect(() => {
    fetch("https://doctors-point.vercel.app/homeservices")
      .then((res) => res.json())
      .then((data) => setTreatments(data));
  }, []);
  if(loading){
    return <progress className="progress progress-primary"></progress>;
  }
  return (
    <div className="pb-16 pt-16 bg-base-200">
      <h1 className="text-4xl font-bold text-orange-600 text-center">Medical Services</h1>
      <p className="text-center">Join The Prescription, Safe Your Life...</p>
      <div className="mx-24 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {treatments.map((treatment) => (
          <TreatmentCard key={treatment._id} treatment={treatment}></TreatmentCard>
        ))}
      </div>
      <div className="flex justify-center mt-10">
      <Link to={`/services`} className="btn btn-primary">
        See All
      </Link>
      </div>
    </div>
  );
};

export default Treatment;
