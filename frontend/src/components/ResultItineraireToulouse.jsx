import React from "react";
// eslint-disable-next-line import/extensions
import CardStep from "./CardStep.jsx";
import toulouseJour1 from "../assets/data/data.toulouseJour1.json";

import "./ResultItineraire.css";
import toulouseJour2 from "../assets/data/data.toulouseJour2.json";

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
        {toulouseJour1.map((step) => (
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
        {toulouseJour2.map((step) => (
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
