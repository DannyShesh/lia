"use client"
import { Tab } from '@headlessui/react';
import { useState } from 'react';

interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

interface Product {
  images: ProductImage[];
}

const product: Product = {
  images: [
    {
      id: 1,
      src: '/info.webp',
      alt: 'lampa',
    },
    {
      id: 2,
      src: '/2.webp',
      alt: 'Hus',
    },
    {
      id: 3,
      src: '/4.webp',
      alt: 'el',
    },
    // More images...
  ]
};

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="flex w-1/2 flex-col">
      <div className="w-auto p-16">
        {/* Display selected image */}
        <div className="lg:hidden mb-4 ">
          <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-64 object-cover " />
        </div>
        <div className="hidden lg:block mb-4 ">
          <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-96 object-cover shadow-xl rounded-md" />
        </div>

        <Tab.Group as="div" className="mx-auto max-w-xl lg:max-w-full">
          <div className="mx-auto mt-6 hidden w-full max-w-xl sm:block lg:max-w-full">
            <Tab.List className="grid grid-cols-4 gap-6">
              {product.images.map((image) => (
                <Tab
                  key={image.id}
                  className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  onClick={() => setSelectedImage(image)}
                >
                  {({ selected }) => (
                    <>
                      <span className="sr-only">{image.alt}</span>
                      <span className="absolute inset-0 overflow-hidden rounded-md">
                        {/* Thumbnail images also set to cover within their container */}
                        <img src={image.src} alt={image.alt} className="h-full w-full object-cover object-center" />
                      </span>
                      <span
                        className={(selected ? 'ring-indigo-500' : 'ring-transparent') + ' pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </Tab>
              ))}
            </Tab.List>
          </div>
        </Tab.Group>
      </div>

      <div className="flex-1">
        {/* Your content for product information */}
      </div>
    </div>
  );
}
