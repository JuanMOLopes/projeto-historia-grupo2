import "./Header.css";

import ModoEscuro from "../ModoEscuro/ModoEscuro";
7;
import Navbar from "../Navbar/Navbar";

function Header(props) {
  return (
    <>
      <header>
        <h1>{props.titulo}</h1>
        <ModoEscuro />
      </header>
      <Navbar />
    </>
  );
}

export default Header;
