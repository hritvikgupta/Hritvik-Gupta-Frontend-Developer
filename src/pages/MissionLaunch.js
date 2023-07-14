import React from 'react';
import { useCompany } from "../hooks/useCompany";
import { Loading } from "../components";
import { Link } from "react-router-dom";

const MissionLaunch = () => {
  const company = useCompany();

  return (
    <>
      <div className="p-5">
        <h1 className="text-white text-xl font-bold mb-1">RECENT LAUNCH</h1>
        <h1 className="text-white text-xxl font-bold">STARLINK MISSION</h1>
        <Link to="/launches" style={{ textDecoration: 'none' }} className="text-white text-sm">
          <button className="py-2 px-4 border-2 border-white text-white font-bold">
            Learn More
          </button>
        </Link>
      </div>
    </>
  );
};

export default MissionLaunch;
