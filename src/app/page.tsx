
import Header from "./components/Header"
import Hero from "./components/Hero"
import Info from "./components/Info"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Carousel from "./components/Carousel"
import Random from "./components/Random"
import Infofi from "./components/fi/Infofi"


export default function Home({searchParams}:{searchParams:{lang:string}}) {
  console.log(searchParams);
  
  return (
    <div className="w-full min-h-screen" >
      <Header></Header>
      <Hero></Hero>
      {(searchParams.lang =="fi")?<Infofi/>:<Info></Info>}
      
      <Footer></Footer>
      
    </div>
  );
}
