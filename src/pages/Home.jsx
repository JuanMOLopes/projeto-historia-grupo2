import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TextoDireita from "../components/TextoDireita/TextoDireita";

function Home() {
  return (
    <>
      <Header titulo="Cicatrizes do Tempo" />
      <TextoDireita titulo="Primeira Guerra Mundial" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eos. Consectetur pariatur tempora amet vel libero possimus veritatis repellendus saepe error, exercitationem, numquam sed. Iusto pariatur possimus dicta debitis officia." imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/270px-GitHub_Invertocat_Logo.svg.png" />
      <TextoDireita titulo="Segunda Guerra Mundial" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eos. Consectetur pariatur tempora amet vel libero possimus veritatis repellendus saepe error, exercitationem, numquam sed. Iusto pariatur possimus dicta debitis officia." imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/270px-GitHub_Invertocat_Logo.svg.png" />
      <TextoDireita titulo="Guerra Fria" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eos. Consectetur pariatur tempora amet vel libero possimus veritatis repellendus saepe error, exercitationem, numquam sed. Iusto pariatur possimus dicta debitis officia." imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/270px-GitHub_Invertocat_Logo.svg.png" />
      <Footer />
    </>
  );
}

export default Home;
