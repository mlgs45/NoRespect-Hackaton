import { stack as Menu } from "react-burger-menu";
import "./Navbar.css";
import logo from "../../../assets/img/envisioned_logo.svg";

export default function Navbar() {
  return (
    <div id="outer-container">
      <Menu outerContainerId="outer-container">
        <a className="menu-item" href="/">
          Accueil
        </a>
        <a className="menu-item" href="/travel">
          Préparer mon voyage
        </a>
        <a className="menu-item" href="/contact">
          Nous contacter
        </a>
      </Menu>
      <header className="header">
        <img className="logo" src={logo} alt="Logo" />
      </header>
    </div>
  );
}
