"use client"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Info from "./components/Info"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="w-full min-h-screen" >
      <Header></Header>
      <Hero></Hero>
      <Info></Info>
      <Footer></Footer>
    </div>
  );
}
