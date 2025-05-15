import './App.css'

// Importamos o React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importamos todas as páginas
import Home from './pages/Home.jsx'
import GuerraDeCanudos from './pages/GuerraDeCanudos.jsx'
import GuerraDoContestado from './pages/GuerraDoContestado.jsx'
import RevolucaoRussa from './pages/RevolucaoRussa.jsx'
import PrimeiraGuerraMundial from './pages/PrimeiraGuerraMundial.jsx'
import FascismoItaliano from './Pages/FascismoItaliano.jsx'
import CriseDe1929 from './pages/CriseDe1929.jsx'
import Video from './pages/Video.jsx'
import Grupo from './pages/Grupo.jsx' 
import Favoritos from './pages/Favoritos.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* definimos as rotas do nosso projeto */}
          {/* o elemento é a página que será exibida quando a rota for acessada */}
          {/* o path é a rota que será acessada */}
          <Route path="/" element={<Home />} />
          <Route path="/guerra-de-canudos" element={<GuerraDeCanudos />} />
          <Route path="/guerra-do-contestado" element={<GuerraDoContestado />} />
          <Route path="/revolucao-russa" element={<RevolucaoRussa />} />
          <Route path="/primeira-guerra-mundial" element={<PrimeiraGuerraMundial />} />
          <Route path="/fascismo-italiano" element={<FascismoItaliano />} />
          <Route path="/crise-de-1929" element={<CriseDe1929 />} />
          <Route path="/video" element={<Video />} />
          <Route path="/grupo" element={<Grupo />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
