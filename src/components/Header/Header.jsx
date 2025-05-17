import "./Header.css";

import { Link } from "react-router-dom";
import ModoEscuro from "../ModoEscuro/ModoEscuro";
import Navbar from "../Navbar/Navbar";

import LogoSite from "/logo-site.png";

function Header(props) {
  return (
    <>
      <header>
        <Link to="/"><img src={LogoSite} alt="Logo do site" /></Link>
        <h1>{props.titulo}</h1>
        <ModoEscuro />
      </header>
      <Navbar />
    </>
  );
}

export default Header;
