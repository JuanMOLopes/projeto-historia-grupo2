import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Video from "./pages/Video"
import GuerraContestado from "./pages/GuerraContestado"
import GuerraCanudos from "./pages/GuerraCanudos"
import Crise29 from "./pages/Crise29"
import GuerraMundial from "./pages/GuerraMundial"
import RevolucaoRussa from "./pages/RevolucaoRussa"
import Fascismo from "./pages/Fascismo"
import Grupo from "./pages/Grupo"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/GuerraContestado" element={<GuerraContestado />} />
          <Route path="/GuerraCanudos" element={<GuerraCanudos />} />
          <Route path="/Crise29" element={<Crise29/>} />
          <Route path="/GuerraMundial" element={<GuerraMundial />} />
          <Route path="/RevolucaoRussa" element={<RevolucaoRussa  />} />
          <Route path="/Fascismo" element={<Fascismo />} />
          <Route path="/Grupo" element={<Grupo/>} />
        </Routes>
       </BrowserRouter>
      </>
    )
}

export default App
