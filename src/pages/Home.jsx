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
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quae deserunt quisquam optio molestiae facilis eveniet debitis reiciendis dicta id fugit dolore vero possimus, veritatis maxime. Dolores perferendis laudantium quidem?</p>
        <img src="../../public/logo-grupo.png" alt="img" className="img-home"/>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repellendus cum vel deserunt sint nesciunt. Expedita dolorum ipsam corrupti voluptatum, veritatis iure autem dolores tempora ea inventore, exercitationem aperiam voluptate?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta necessitatibus repudiandae facere eaque magnam dolorum iure hic, dolor architecto perspiciatis totam porro vel minima deleniti nam magni, aliquam voluptas quidem.</p>
        </div>
      <Footer />
    </>
  );
}

export default Home;
