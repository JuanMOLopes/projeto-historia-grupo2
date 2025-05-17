import "./Navbar.css";

import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/guerra-de-canudos">Guerra de Canudos</Link>
      <Link to="/guerra-do-contestado">Guerra do Contestado</Link>
      <Link to="/primeira-guerra-mundial">Primeira Guerra Mundial</Link>
      <Link to="/revolucao-russa">Revolução Russa</Link>
      <Link to="/fascismo-italiano">Fascismo Italiano</Link>
      <Link to="/crise-de-1929">Crise de 1929</Link>
      <Link to="/video">Video</Link>
      <Link to="/favoritos">Favoritos</Link>
      <Link to="/grupo">Grupo</Link>
    </nav>
  );
}

export default Nav;
