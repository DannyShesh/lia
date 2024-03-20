import React from 'react';

export default function Hero() {
  return (
    <div className="w-full h-screen bg-cover flex justify-center items-center" style={{backgroundImage: `url('/hero2.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="absolute top-1/2 left-0 w-1/2 transform  -translate-y-1/2">
        <h1 className="text-5xl md:text-7xl font-bold text-white textshadow ">Elektriker och elmontör i Jakobstad</h1>
        <div className='p-10'>
          <button className='text-white  text-4xl  textshadow '> <a href="#Footer">Ta kontakt</a> </button>
          <div className='border-b-2  top-0 border-slate-50 w-1/4 mt-5'></div>

        </div>
        
        
      </div>

    </div>
  );
}


