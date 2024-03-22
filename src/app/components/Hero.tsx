import React from 'react';

export default function Hero() {
  return (
    <div className="w-full h-screen bg-cover flex justify-center items-center" style={{backgroundImage: `url('/hero.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="absolute top-1/2 left-20 w-1/2 transform  -translate-y-1/2">
        <h1 className="text-5xl md:text-7xl font-bold text-white textshadow ">Behöver du en elmontör?</h1>
        <div className='p-10'>
          <button className='text-white  text-4xl  textshadow hover:text-black   '> <a href="#Footer">Ta kontakt</a> </button>
          <div className='border-b-2  top-0 border-slate-50 w-1/4 mt-5 hover:border-slate-950 '></div>

        </div>
        
        
      </div>

    </div>
  );
}


