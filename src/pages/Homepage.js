import { useState, useEffect, useContext } from "react";
import { Loading } from "../components";
import { useCompany } from "../hooks/useCompany";
import MissionLaunch from "./MissionLaunch";
import RecentMissions from "./RecentMissions";

export default function Homepage() {
  const company = useCompany();

  const handleLearnMoreClick = () => {
    const showcaseSection = document.getElementById("showcase");
    showcaseSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="homepage">
        <div className="absolute bottom-20 left-0 p-5">
          <h1 className="text-white text-xl font-bold mb-3">Welcome to SpaceX</h1>
          <button className="py-2 px-4 border-2 border-white text-white font-bold" onClick={handleLearnMoreClick}>
            Learn More
          </button>
        </div>
      </section>

      <section className="secondpage" style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start" }}>
        <MissionLaunch />
      </section>

      <section className="showcase" id="showcase">
        <RecentMissions />
      </section>
    </>
  );
}
