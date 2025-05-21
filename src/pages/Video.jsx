import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import TextoWikipedia from "../components/TextoWikipedia/TextoWikipedia";

function Vídeo() {
  return (
    <>
      <Header titulo="Vídeo - Fascismo Europeu" />

      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/4xnsmyI5KMQ?si=6kZ1lcTFpvVbEWEa"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <TextoWikipedia tema="Fascismo na Europa" />
      <Footer />
    </>
  );
}
export default Vídeo;
