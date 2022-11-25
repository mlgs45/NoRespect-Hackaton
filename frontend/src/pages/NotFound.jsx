import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import Navbar from "../components/layout-components/Navbar/Navbar";
import Footer from "../components/layout-components/Footer/Footer";
import error from "../assets/lottie/error.json";
import "../assets/styles/NotFound.css";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="notFoundContainer">
        <Player autoplay loop src={error} className="notFoundLottie" />
        <Link to="/">
          <button type="button" className="notFoundButton">
            Go Back
          </button>
        </Link>
      </div>
      <Footer />
      {/*
        __                 
        '. \  🅷🅴🅻🅻🅾, 🅼🆈 🅽🅰🅼🅴 🅸🆂 🅴🅻🅼🅴🆁 ❗
        '- \               
          / /_         .---.
        / | \\,.\/--.//    )
        |  \//        )/  / 
          \  ' ^ ^    /    )____.----..  6
          '.____.    .___/            \._) 
              .\/.                      )
              '\                       /
              _/ \/    ).        )    (
              /#  .!    |        /\    /
              \  C// #  /'-----''/ #  / 
          .   'C/ |    |    |   |    |mrf  ,
          \), .. .'OOO-'. ..'OOO'OOO-'. ..\(,
      */}
    </>
  );
}
