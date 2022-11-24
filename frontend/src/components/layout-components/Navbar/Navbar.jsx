import { stack as Menu } from "react-burger-menu";
import "./Navbar.css";

export default function Navbar() {
  return (
    <Menu>
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
  );
}
