import React from "react";
import icon from "../assets/img/icon-step-transport.svg";

function CardStep({ name, address, description, countCo2, website, image }) {
  return (
    <div className="cardStep">
      <img id="imgStep" src={image} alt="illustration of Step" />
      <div className="cardInformations">
        <div className="informationsStep">
          <div className="nameStep">{name}</div>
          <div className="adressStep">{address}</div>
          <div className="descStep">{description}</div>
        </div>
        <div className="blocStep">
          <img id="iconStep" src={icon} alt="type of step" />
          <div className="countCo2">{countCo2} kg Co2</div>
          <button className="btn-booking" onClick={website}>
            <div className="textButton">Réserver</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardStep;
