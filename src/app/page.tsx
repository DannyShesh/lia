"use client"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Info from "./components/Info"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"

export default function Home() {
  return (
    <div className="w-full min-h-screen" >
      <Header></Header>
      <Hero></Hero>
      <Gallery></Gallery>
      <Info></Info>
      <Footer></Footer>
    </div>
  );
}
