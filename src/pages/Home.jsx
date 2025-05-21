import "../App.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header titulo="Cicatrizes do Tempo" />
      <div className="container-home">

        <h1>Bem-vindo ao nosso site!</h1>
        
        <div className="Lado-a-lado">
        <p>Este site é um projeto de integração SESI - SENAI com o objetivo de aplicar conceitos desenvolvidos ao longo do curso de Análise e Desenvolvimento de sistemas, por meio da construção de um site usando Vite (React), e API da Wikipédia, para exibição de conteúdos estudados na aula de história juntamente com a professora Julia Milani. </p>
        <img src="../../public/logo-grupo.png" alt="img" className="img-home"/>
        </div>

        <p>Aqui você aprenderá sobre diversos conteúdos históricos e interessantes. Então, aproveite e venha se tornar um amante de história conosco!! 📚 </p>
        </div>
      <Footer />
    </>
  );
}

export default Home;