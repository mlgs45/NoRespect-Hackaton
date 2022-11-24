import React from "react";
// eslint-disable-next-line import/extensions
import CardStep from "./CardStep.jsx";
import jour1Toulouse from "../assets/data/dataToulouse";

import "./ResultItineraire.css";
import jour2Toulouse from "../assets/data/dataToulousejour2";

function TripjourToulouse() {
  return (
    <>
      <h1 className="title">
        <span className="t-bold">Découvrez</span> le programme{" "}
        <span className="t-bold">de votre voyage</span>
      </h1>
      <map>CARTE</map>
      <div className="jour">
        <div className="explainsPart">
          <div className="headerDay">
            <div className="dayCount">
              <div className="dayD">JOUR 1</div>
            </div>
            <div className="nameCity">CLERMONT-FERRAND</div>
          </div>
        </div>
        {jour1Toulouse.map((step) => (
          <CardStep
            key={step.id}
            icon={step.icon}
            name={step.name}
            address={step.address}
            description={step.description}
            countCo2={step.countCo2}
            website={step.website}
            image={step.img}
          />
        ))}
      </div>
      <div className="jour">
        <div className="explainsPart">
          <div className="headerDay">
            <div className="dayCount">
              <div className="dayD">JOUR 2</div>
            </div>
            <div className="nameCity">TOULOUSE</div>
          </div>
        </div>
        {jour2Toulouse.map((step) => (
          <CardStep
            key={step.id}
            icon={step.icon}
            name={step.name}
            address={step.address}
            description={step.description}
            countCo2={step.countCo2}
            website={step.website}
            image={step.img}
          />
        ))}
      </div>
    </>
  );
}

export default TripjourToulouse;
