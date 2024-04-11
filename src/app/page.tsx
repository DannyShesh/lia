"use client"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Info from "./components/Info"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Carousel from "./components/Carousel"
import Random from "./components/Random"


export default function Home() {
  return (
    <div className="w-full min-h-screen" >
      <Header></Header>
      <Hero></Hero>
      <Info></Info>
      <Footer></Footer>
      <Random></Random>
    </div>
  );
}
