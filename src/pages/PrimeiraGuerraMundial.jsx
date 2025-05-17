import Header from "../components/Header/Header";

function PrimeiraGuerraMundial() {
  return (
    <>
      <Header titulo="Primeira Guerra Mundial" />

      <main className="conteudo-principal">
        <section className="secao-resumo">
          <h2>Resumo</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, eos. Consectetur pariatur tempora amet vel libero possimus veritatis repellendus saepe error, exercitationem, numquam sed. Iusto pariatur possimus dicta debitis officia.
          </p>
        </section>

        <section className="secao-video">
          <iframe
            width="100%"
            height="400"
            src=""
            title=""
            allowFullScreen
          ></iframe>
        </section>

        <section className="bloco bloco1">
          <div className="texto">
            <h2>Titulo</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus explicabo ab, natus quisquam veniam nisi consequuntur fuga! Fuga laboriosam quis totam pariatur, amet laborum commodi soluta dolor excepturi dolorem quibusdam!
            </p>
          </div>
          <img
            src=""
            alt=""
            className="imagem"
          />
        </section>

        <section className="bloco bloco2">
          <h2>Titulo</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum, soluta voluptates exercitationem sunt tenetur velit unde quisquam in amet praesentium quod accusantium repellendus numquam! Ratione ea voluptatem delectus illo.
          </p>
        </section>

        <section className="bloco bloco3">
          <img
            src=""
            alt=""
            className="imagem"
          />
          <div className="texto">
            <h2>Titulo</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quasi et, eligendi cupiditate nulla minima quidem doloribus, aspernatur deleniti atque aut. Possimus sequi sapiente vitae voluptatum amet. Dolore, ducimus quaerat!
            </p>
          </div>
        </section>

        <section className="bloco bloco4">
          <img
            src=""
            alt=""
            className="imagem"
          />
          <img
            src=""
            alt=""
            className="imagem"
          />
          <img
            src=""
            alt=""
            className="imagem"
          />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default PrimeiraGuerraMundial;
