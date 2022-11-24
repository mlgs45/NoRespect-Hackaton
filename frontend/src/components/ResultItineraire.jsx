import React from "react";
import CardStep from "./CardStep";
import jour1 from "../assets/data/data.jour1.json";
import jour2 from "../assets/data/data.jour2.json";

import "./ResultItineraire.css";

function Tripjour1() {
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
            <div className="nameCity">ROME</div>
          </div>
        </div>
        {jour1.map((step) => (
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
            <div className="nameCity">ROME</div>
          </div>
        </div>
        {jour2.map((step) => (
          <CardStep
            key={step.id}
            name={step.name}
            icon={step.icon}
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

export default Tripjour1;
