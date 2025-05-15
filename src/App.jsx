import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import GuerraDeCanudos from "./pages/GuerraDeCanudos";
import GuerraDoContestado from "./pages/GuerraDoContestado";
import PrimeiraGuerraMundial from "./pages/PrimeiraGuerraMundial";
import RevolucaoRussa from "./pages/RevolucaoRussa";
import FascismoItaliano from "./pages/FascismoItaliano";
import CriseDe1929 from "./pages/CriseDe1929";
import Video from "./pages/Video";
import Favoritos from "./pages/Favoritos";
import Grupo from "./pages/Grupo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guerra-de-canudos" element={<GuerraDeCanudos />} />
          <Route
            path="/guerra-do-contestado"
            element={<GuerraDoContestado />}
          />
          <Route
            path="/primeira-guerra-mundial"
            element={<PrimeiraGuerraMundial />}
          />
          <Route path="/revolucao-russa" element={<RevolucaoRussa />} />
          <Route path="/fascismo-italiano" element={<FascismoItaliano />} />
          <Route path="/crise-de-1929" element={<CriseDe1929 />} />
          <Route path="/video" element={<Video />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/grupo" element={<Grupo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
