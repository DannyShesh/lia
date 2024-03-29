import React from 'react';
import Card from "./Card"

export default function Hero() {
  return (
    <div className="w-full h-screen  bg-cover flex max-md:flex-col justify-evenly items-center" style={{backgroundImage: `url('/hero.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="flex items-start justify-center flex-col">
        <h1 className="text-5xl max-md:text-xl font-bold text-white textshadow ">Behöver du en elmontör?</h1>
        <div className='p-10'>
          <button className='text-white  text-4xl max-md:text-2xl  textshadow hover:text-black   '> <a href="#Footer">Ta kontakt</a> </button>
          <div className='border-b-2  top-0 border-slate-50 w-1/4 mt-5 hover:border-slate-950 '></div>

        </div>
        
        
      </div>

  <Card></Card>

      
    </div>

  );
}


