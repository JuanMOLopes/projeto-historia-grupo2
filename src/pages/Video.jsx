import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import TextoWikipedia from "../components/TextoWikipedia/TextoWikipedia";

function Vídeo() {
  return (
    <>
      <Header titulo="Vídeo - Vídeo Temporário" />

      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/ex0kcWSDHNk?si=ehl4UiPpR0nVNLwk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <Footer />
    </>
  );
}
export default Vídeo;
