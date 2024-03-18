"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProductPreview = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  const handleImageHover = (image) => {
    setCurrentImage(image);
  };

  return (
    <>
      <div className="relative flex gap-x-12 h-[533px] ">
        <div className="flex flex-col w-[10vw] gap-y-12 ">
          {images.map((image, index) => (
            <div
            key={index}
             className="relative w-full h-full">
              <div
                className="absolute bg-gray-200 rounded-lg inset-0 flex items-center justify-center"
                key={index}
                onClick={(e) => handleImageClick(image)}
                onMouseEnter={(e) => handleImageHover(image)}>
                <Image
                  src={image}
                  alt={image}
                  width={200}
                  height={200}
                  className="z-20"
                />
              </div>

             
            </div>
          ))}
        </div>
        <div className="relative flex border-[1px] rounded-3xl w-[60vw] shadow-xl bg-gray-100">
          {images.slice(0, 1).map((img, index) => (
            <div key={index} className="relative w-full h-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={currentImage}
                  alt={currentImage}
                  priority={true}
                  width={400}
                  height={400}
                  objectFit="contain"
                  className="z-20"
                />
              </div>
              <Image
                src="/products/product-slider-bg.png"
                alt="bg"
                layout="fill"
                objectFit="cover"
                className="z-10 rounded-3xl"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPreview;
