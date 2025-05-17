import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TextoDireita from "../components/TextoDireita/TXTdir";
import TextoEsquerda from "../components/TextoEsquerda/TXTesq";

function Home() {
  return (
    <>
      <Header titulo="Cicatrizes do Tempo" />
      <TextoDireita />
      <TextoEsquerda />
      <Footer />
    </>
  );
}

export default Home;
