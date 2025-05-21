// importa o useState (estado) e useEffect (efeitos) do React
import { useState, useEffect } from "react";
import "./ModoEscuro.css";

function ModoEscuro() {
  // cria o estado para armazenar o modo escuro e verifica (get) o que está armazenado no localStorage
  // se no localStorage estiver armazenado o modoEscuro, então o estado será true, caso contrário será false
  // se não tiver nada no localStorage, o estado inicia como false
  const [modoEscuro, setModoEscuro] = useState(
    () => JSON.parse(localStorage.getItem("modoEscuro")) || false
  );

  // para cada mudança no estado, salva no localStorage e verifica o estado
  // se o estado for true, adiciona a classe modo-escuro no body
  // se o estado for false, remove a classe modo-escuro no body
  useEffect(() => {
    localStorage.setItem("modoEscuro", modoEscuro);

    if (modoEscuro) {
      document.body.classList.add("modo-escuro");
    } else {
      document.body.classList.remove("modo-escuro");
    }
  }, [modoEscuro]);

  return (
    // cria um botão que, quando clicado (onclick), define o estado modoEscuro como o inverso do estado anterior (se estava true, fica false e vice-versa)
    <button
      className="btn-modo-escuro"
      onClick={() => setModoEscuro(!modoEscuro)}
    >
      {/* se o estado for true, exibe o ícone de sol, caso contrário, exibe o ícone de lua */}
      {modoEscuro ? "☀︎" : "🌑"}
    </button>
  );
}

// exporta o componente ModoEscuro
export default ModoEscuro;
