import React from "react";

function CardStep({
  name,
  address,
  description,
  countCo2,
  website,
  image,
  icon,
  key,
}) {


  return (
    <div className="cardStep">
      <img id={key} src={image} alt="illustration of Step" />
      <div className="cardInformations">
        <div className="informationsStep">
          <div className="nameStep">{name}</div>
          <div className="adressStep">{address}</div>
          <div className="descStep">{description}</div>
        </div>
        <div className="blocStep">
          <img id="iconStep" src={icon} alt="type of step" />
          <div className="countCo2">{countCo2} kg Co2</div>
          <a href={website}><button
            type="button"
            className="btn-booking"
          >
            <div className="textButton">Réserver</div>
          </button></a>
        </div>
      </div>
    </div>
  );
}

export default CardStep;
