import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div id="contato">
        <a href="https://github.com/JuanMOLopes/projeto-historia-grupo2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/270px-GitHub_Invertocat_Logo.svg.png" />
          https://github.com/JuanMOLopes/projeto-historia-grupo2
        </a>
      </div>
      <div className="lado-a-lado">
        <div>
          <h3>Professores</h3>
          <ul>
            <li>Antonio Tupinambá</li>
            <li>Leandro Grosso</li>
            <li>Julia Milani</li>
          </ul>
        </div>
        <div>
          <h3>Grupo 2</h3>
          <ul>
            <li>Agatha Aline França</li>
            <li>Ana Beatriz Farias Pereira</li>
            <li>Juan Matheus de Oliveira Lopes</li>
            <li>Lucas Aguiar Pereira Marin</li>
            <li>Zayra Alice França</li>
          </ul>
        </div>
      </div>
      <div className="curso">
          <p>Senai Valinhos - Análise e Desenvolvimento de Sistemas</p>
          <p>SESI Vinhedo - Gustavo Infanger Vicentin</p>
        </div>
    </footer>
  );
}

export default Footer;
