import React from "react";
// eslint-disable-next-line import/extensions
import CardStep from "./CardStep.jsx";
import jour1 from "../assets/data/data.js";

import "./ResultItineraire.css";

function Tripjour1() {
  return (
    <>
      <h1>
        <span className="t-bold">Découvrez</span> le programme{" "}
        <span className="t-bold">de votre voyage</span>
      </h1>
      <map>CARTE</map>
      <div className="explainsPart">
        <div className="headerDay">
          <div className="dayCount">
            <div className="dayD">JOUR 1</div>
          </div>
          <div className="nameCity">ROME</div>
        </div>
      </div>
      {jour1.map((step) => (
        <CardStep
          name={step.name}
          address={step.address}
          description={step.description}
          countCo2={step.countCo2}
          website={step.website}
          image={step.image}
        />
      ))}
    </>
  );
}

export default Tripjour1;
