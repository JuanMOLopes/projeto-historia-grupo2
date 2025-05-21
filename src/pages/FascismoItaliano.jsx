import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import TextoDireita from "../components/TextoDireita/TextoDireita";
import TextoEsquerda from "../components/TextoEsquerda/TextoEsquerda";
import TextoWikipedia from "../components/TextoWikipedia/TextoWikipedia";

function FascismoItaliano() {
  return (
    <>
      <Header titulo="Fascismo Italiano" />
      <div className="conteudo">
        <div className="secao-resumo-wikipedia">
          <TextoWikipedia tema="Fascismo italiano" />
        </div>

        <div className="secao-video">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/mRRQcTZ1vj0?si=_F4nvWNJmFgsMqYK"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="secao-texto">
          <TextoEsquerda
            titulo="Antecedentes"
            texto="O auge do totalitarismo ocorreu entre os anos 1920 e 1930, na Europa. Seu início está associado diretamente às consequências da Primeira Guerra Mundial. Após a Grande Guerra, crises políticas e econômicas afligiram diversas nações, em especial, as julgadas derrotadas no conflito. Além disso, a difusão do socialismo assustou a classe média europeia.

Nesta realidade conflituosa, contingentes massivos da população europeia foram convencidos a adotarem o totalitarismo ao invés da democracia."
            imagem="https://i.natgeofe.com/n/1cded6de-069c-4767-9a88-645cac0cc694/BAL_3077962_3x4.JPG"
        
          />
          <TextoDireita
            titulo="Desenvolvimento"
            texto="O fascismo na Itália, liderado por Benito Mussolini, entrou em colapso em 1943. Depois de muitas derrotas militares e crescente descontentamento popular, o Grande Conselho Fascista votou pela destituição de Mussolini em 25 de julho daquele ano. Ele foi preso por ordem do rei Vítor Emanuel III, que nomeou Pietro Badoglio como primeiro-ministro para negociar a rendição com os Aliados.

Mussolini não ficou muito tempo preso, em setembro de 1943, forças especiais alemãs o resgataram e ele estabeleceu a República Social Italiana no norte do país, que era como estado-fantoche controlado por Adolf Hitler, mas com o avanço dos aliados e a pressão da resistência italiana, o regime se desfez rapidamente.

Em abril de 1945, enquanto tentava fugir para a Suíça, Mussolini foi capturado por guerrilheiros italianos e executado em 28 de abril e seu corpo foi exposto em Milão, marcando simbolicamente o fim do fascismo na Itália."
            imagem="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/art535324.webp?w=380&h=570"
          />
          <TextoEsquerda
            titulo="Desfecho"
            texto="O fascismo na Itália, liderado por Benito Mussolini, entrou em colapso em 1943. Depois de muitas derrotas militares e crescente descontentamento popular, o Grande Conselho Fascista votou pela destituição de Mussolini em 25 de julho daquele ano.
             Ele foi preso por ordem do rei Vítor Emanuel III, que nomeou Pietro Badoglio como primeiro-ministro para negociar a rendição com os Aliados.

Mussolini não ficou muito tempo preso, em setembro de 1943, forças especiais alemãs o resgataram e ele estabeleceu a República Social Italiana no norte do país, que era como estado-fantoche controlado por Adolf Hitler, mas com o avanço dos aliados e a pressão da resistência italiana, o regime se desfez rapidamente.

Em abril de 1945, enquanto tentava fugir para a Suíça, Mussolini foi capturado por guerrilheiros italianos e executado em 28 de abril e seu corpo foi exposto em Milão, marcando simbolicamente o fim do fascismo na Itália.
"
            imagem="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/bal_2967450.webp?w=760&h=523"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default FascismoItaliano;
