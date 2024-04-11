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
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    // More images...
  ]
};

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/3">
        {/* Display selected image */}
        <div className="lg:hidden mb-4">
          <img src={selectedImage.src} alt={selectedImage.alt} className="mx-auto max-w-sm" />
        </div>
        <div className="hidden lg:block mb-4">
          <img src={selectedImage.src} alt={selectedImage.alt} className="mx-auto max-w-md" />
        </div>

        <Tab.Group as="div" className="mx-auto max-w-md lg:max-w-full">
          <div className="mx-auto mt-6 hidden w-full max-w-md sm:block lg:max-w-full">
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
