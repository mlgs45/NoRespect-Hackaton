import React from "react";
// eslint-disable-next-line import/extensions
import CardStep from "./CardStep.jsx";
import fakeJour1 from "../assets/data/data.fakeJour1.json";

import "./ResultItineraire.css";

function TripjourElmer() {
    return (
        <>
            <h1 className="title">
                <span className="t-bold">Découvrez</span> le programme{" "}
                <span className="t-bold">de votre voyage</span>
            </h1>
            <div className="jour">
                <div className="explainsPart">
                    <div className="headerDay">
                        <div className="dayCount">
                            <div className="dayD">JOUR 1</div>
                        </div>
                        <div className="nameCity">MARSEILLE BÉBÉ</div>
                    </div>
                </div>
                {fakeJour1.map((step) => (
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

export default TripjourElmer;
