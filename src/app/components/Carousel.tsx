"use client"
import ImageGallery from "react-image-gallery";
import React from 'react'

const images = [
  {
    original: "/hero2.jpg",
    thumbnail: "/hero2.jpg",
    
    
  },
  {
    original: "/hero.jpg",
    thumbnail: "/hero.jpg",
  },
  {
    original: "/hero2.jpg",
    thumbnail: "/hero2.jpg",
  },
];

export default function Carousel() {
  return (
    <div className="w-full h-screen">
      <ImageGallery items={images}></ImageGallery>
    </div>
  )
}
