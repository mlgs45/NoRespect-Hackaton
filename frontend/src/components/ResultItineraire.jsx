import React, { useState } from "react";
// eslint-disable-next-line import/extensions
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import CardStep from "./CardStep";
import jour1 from "../assets/data/data.jour1.json";
import jour2 from "../assets/data/data.jour2.json";
import Map from "./Map";


import "./ResultItineraire.css";

function Tripjour1() {
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
      <Map day={jour1.concat(jour2)} />
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
            <div className="nameCity">ROME</div>
          </div>
        </div>
        {showMap === 1 ? <Map day={jour1} /> : false}
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
            <div className="nameCity">ROME</div>
          </div>
        </div>
        {showMap === 2 ? <Map day={jour2} /> : false}
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
