import React, { useState } from "react";
// eslint-disable-next-line import/extensions
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import CardStep from "./CardStep";
import toulouseJour1 from "../assets/data/data.toulouseJour1.json";
import Map from "./Map";

import "./ResultItineraire.css";
import toulouseJour2 from "../assets/data/data.toulouseJour2.json";

function TripjourToulouse() {
  const [showMap, setShowMap] = useState(0);

  const changeMap = (day) => {
    if (day === showMap) {
      setShowMap(0);
    } else {
      setShowMap(day);
    }
  };

  return (
    <>
      <h1 className="title">
        <span className="t-bold">Découvrez</span> le programme{" "}
        <span className="t-bold">de votre voyage</span>
      </h1>
      <Map day={toulouseJour1.concat(toulouseJour2)} />
      <div className="jour">
        <div
          role="presentation"
          onKeyDown={() => changeMap(1)}
          onClick={() => changeMap(1)}
          className="explainsPart"
        >
          <div className="headerDay">
            <FontAwesomeIcon className="mapIcon" icon={faMapLocationDot} />
            <div className="dayCount">
              <div className="dayD">JOUR 1</div>
            </div>
            <div className="nameCity">CLERMONT-FERRAND</div>
          </div>
        </div>
        {showMap === 1 ? <Map day={toulouseJour1} /> : false}
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
        <div
          role="presentation"
          onKeyDown={() => changeMap(2)}
          onClick={() => changeMap(2)}
          className="explainsPart"
        >
          <div className="headerDay">
            <FontAwesomeIcon className="mapIcon" icon={faMapLocationDot} />
            <div className="dayCount">
              <div className="dayD">JOUR 2</div>
            </div>
            <div className="nameCity">TOULOUSE</div>
          </div>
        </div>
        {showMap === 2 ? <Map day={toulouseJour2} /> : false}
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
