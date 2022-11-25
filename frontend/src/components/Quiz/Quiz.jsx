import "./Quiz.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const [btnActive, setBtnActive] = useState("");
  const [showChoiseDestination, setShowChoiseDestination] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  function handleClickBtn(e) {
    if (btnActive === e.currentTarget.id) {
      setBtnActive("");
    } else {
      setBtnActive(e.currentTarget.id);
    }
  }

  function handleClickChoiseDestination() {
    setShowChoiseDestination(!showChoiseDestination);
  }

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (showChoiseDestination === false) {
      navigate("/toulouse");
    } else {
      navigate("/results");
    }
  };

  return (
    <div className="content">
      <section>
        <h1 className="h1">
          <span className="t-bold">imaginez</span> votre voyage{" "}
          <span className="t-bold">dès maintenant</span>
        </h1>
        <div className="card">
          <div className="card-title mg-b-08">
            Connaissez-vous votre destination ?
          </div>
          <div className="form">
            <button
              id="choiseDestination"
              onClick={handleClickChoiseDestination}
              className={
                showChoiseDestination === false ? "btn-active button" : "button"
              }
              type="button"
            >
              {showChoiseDestination === true ? "NON" : "OUI"}
            </button>
            {showChoiseDestination === true ? (
              <input
                className="w-70 mg-left-5"
                type="text"
                name="destination"
                placeholder="Entrez votre destination"
              />
            ) : (
              false
            )}
          </div>
        </div>
        <div className="card">
          <div className="card-title mg-b-1-4">
            Quelle sont les dates de votre voyages ?
          </div>
          <div className="inline space-b mg-b-08">
            <div className="card-title mg-r-0-5">Départ: </div>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="inline space-b">
            <div className="card-title  mg-r-0-5">Arrivée</div>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
          </div>
        </div>

        <div className="card">
          <div className="form inline space-b">
            <div className="card-title">Quel est votre budget ?</div>
            <div className="form-sign w-30">
              <span className="sign">€</span>
              <input className="price" type="text" name="destination" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-title mg-b-1-4">Combien de voyageurs ?</div>
          <div className="inline space-a">
            <div>
              <div className="card-title mg-b-0-4">Adultes</div>
              <select className="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
              </select>
            </div>
            <div>
              <div className="card-title mg-b-0-4">Enfants</div>
              <select className="select">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
              </select>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-title mg-b-08">
            Quels sont vos centres d'intérêts ?
          </div>
          <div className="button-group">
            <button
              id="btn1"
              onClick={handleClickBtn}
              className={
                btnActive === "btn1"
                  ? "btn-active button btn-flex"
                  : "button btn-flex"
              }
              type="button"
            >
              Culture
            </button>
            <button
              id="btn2"
              onClick={handleClickBtn}
              className={
                btnActive === "btn2"
                  ? "btn-active button btn-flex"
                  : "button btn-flex"
              }
              type="button"
            >
              Sport
            </button>
            <button
              id="btn3"
              onClick={handleClickBtn}
              className={
                btnActive === "btn3"
                  ? "btn-active button btn-flex"
                  : "button btn-flex"
              }
              type="button"
            >
              Nature
            </button>
            <button
              id="btn4"
              onClick={handleClickBtn}
              className={
                btnActive === "btn4"
                  ? "btn-active button btn-flex"
                  : "button btn-flex"
              }
              type="button"
            >
              Shopping
            </button>
          </div>
        </div>

        <div className="voyage-eco">
          ✅ <span className="t-bold">Voyage</span> écoresponsable
        </div>
        <button
          type="button"
          className="button generate"
          onClick={handleSubmit}
        >
          Générer mon voyage →
        </button>
      </section>
    </div>
  );
}
