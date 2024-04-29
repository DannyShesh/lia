import React from 'react';
import Card from "./Card"

export default function Hero() {
  return (
    <div className="w-full h-screen  bg-cover flex max-md:flex-col justify-start items-center" style={{backgroundImage: `url('/hero.webp')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="flex items-start  flex-col">
        <h1 className="text-4xl max-md:text-xl font-bold text-white textshadow ">Behöver du en elmontör <br />
i Jakobstadnejden? <br />
 <br />
Tarvitsetko sähköasentajaa Pietarsaaren seudulla?</h1>
        <div className='p-10'>
          <button className='text-white  text-4xl max-md:text-2xl  textshadow hover:text-black   '> <a href="#Footer">Ta kontakt</a> </button>
          <div className='border-b-2  top-0 border-slate-50 w-1/4 mt-5 hover:border-slate-950 '></div>

        </div>
        
        
      </div>


      
    </div>

  );
}


