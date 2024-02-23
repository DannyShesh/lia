import React from 'react';

export default function Hero() {
  return (
    <div className="w-full h-screen bg-cover flex justify-center items-center" style={{backgroundImage: `url('/hero.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="absolute top-1/2 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-5xl md:text-7xl font-bold text-white">Ronnies <br />Elservice</h1>
      </div>

    </div>
  );
}


