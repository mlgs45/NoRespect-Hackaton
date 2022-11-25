import Footer from "../components/layout-components/Footer/Footer";
import Navbar from "../components/layout-components/Navbar/Navbar";
import welcomeIcon from "../assets/img/home/welcomeIcon.svg";
import { Link } from "react-router-dom";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <header className="home-header">
        <img
          src={welcomeIcon}
          alt="Welcome Illustration"
          className="welcome-illustration"
        />
      </header>
      <div className="home-info">
        <span>
          <h2> Envie de vous évadez ? </h2>
        </span>
        <span>
          {" "}
          <p>
            Répondez à un rapide questionnaire et Envisioned Journey vous
            organise un voyage éco-responsable clef en main. Transports, hôtels,
            activités, restaurants...{" "}
          </p>
        </span>
        <span>
          <p>Il n’y a plus qu’à suivre notre programme.</p>
          <p>
            {" "}
            Bonus : nos voyages prévoient un critère écoresponsable pour vous
            permettre de partir la conscience tranquille.
          </p>
        </span>
      </div>
      <div className="home-start">
        <h2>Démarrer votre Journey</h2>
        <Link to="/travel"><button type="button" className="button-home">
          <div className="textButton">{" "}
            GO{" "}
          </div>
        </button></Link>
      </div>
      <div className="container-animation">
        <div className="container-animation">
          <div className="campfire-wrapper">
            <div className="tree-container-back">
              <div className="tree-8" />
              <div className="tree-9" />
              <div className="tree-10" />
            </div>
            <div className="rock-container">
              <div className="rock-big" />
              <div className="rock-small">
                <div className="rock-1" />
                <div className="rock-2" />
                <div className="rock-3" />
                <div className="rock-4" />
              </div>
            </div>
            <div className="smoke-container">
              <svg className="svg-tree">
                <path d="M 150 0 Q 200 100 100 250 C 0 450 120 400 50 600  " />
              </svg>
              <div className="fire-container">
                <div className="flame-1" />
                <div className="flame-2" />
                <div className="flame-3" />
              </div>
            </div>
            <div className="tree-container-front">
              <div className="tree-1" />
              <div className="tree-2" />
              <div className="tree-3" />
              <div className="tree-4" />
              <div className="tree-5" />
              <div className="tree-6" />
              <div className="tree-7" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
