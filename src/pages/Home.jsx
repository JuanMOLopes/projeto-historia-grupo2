import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TextoDireita from "../components/TextoDireita/TextoDireita";

function Home() {
  return (
    <>
      <Header titulo="Cicatrizes do Tempo" />
      <TextoDireita titulo="Teste" texto="abcd"/>
      <TextoDireita titulo="Teste" texto="xyz"/>
      <Footer />
    </>
  );
}

export default Home;
