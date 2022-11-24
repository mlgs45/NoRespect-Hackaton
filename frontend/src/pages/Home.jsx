import Footer from "../components/layout-components/Footer/Footer";
import Navbar from "../components/layout-components/Navbar/Navbar";
import welcomeIcon from "../assets/img/home/welcomeIcon.svg";
import bottomIcon from "../assets/img/home/bottomIcon.svg";

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
          <h1> Envie de vous évadez ? </h1>
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
          <p>
            Il n’y a plus qu’à suivre notre programme. Bonus : nos voyages
            prévoient un critère écoresponsable pour vous permettre de partir la
            conscience tranquille.
          </p>
        </span>
      </div>
      <div className="home-start">
        <h1>Demmarrer votre Journey</h1>
        <button type="button" className="button-home">
          {" "}
          GO{" "}
        </button>
      </div>
      <div className="bottom-home-page">
        <img
          src={bottomIcon}
          alt="Welcome Illustration"
          className="bottom-icon"
        />
      </div>
      <Footer />
    </div>
  );
}
