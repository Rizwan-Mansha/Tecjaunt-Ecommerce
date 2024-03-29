import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { cartProducts } from "@/dummyData/sliderData";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import MultiProductSlider from "@/components/productComponents/MultiProductSlider";
import axios from "axios";
import ProductPreview from "@/components/productComponents/ProductPreview";

const page = async ({ params }) => {
  const productId = params.product;
  let product;

  try {
    const response = await axios.get(
      `https://dummyjson.com/products/${productId}`
    );
    product = response.data;
  } catch (error) {
    console.log(error);
  }
  console.log("product:", product);
  return (
    <MaxWidthWrapper>
      <div className=" my-12 m-auto font-tec  ">
        <p className="text-3xl">Shop</p>
        <div className="my-16   flex flex-col sm:flex-row gap-10 ">
          <div className="flex-grow  overflow-hidden ">
            <ProductPreview images={product.images} />
          </div>
          <div className="flex w-[30vw] h-[533px] flex-col  p-8 border-[1px] border-red-300 rounded-3xl    shadow-xl bg-gray-100 ">
            <p className="font-secondary  text-primary text-2xl font-semibold">
              ${product.price}.00
            </p>
            <h3 className=" mt-4 text-2xl font-semibold">{product.title}</h3>

            <hr className="my-6" />

            <h3 className="font-secondary  text-primary text-xl font-semibold">
              Description
            </h3>
            <p className=" text-gray-500 text-sm mt-6">{product.description}</p>

            <hr className="my-6" />
            <div className="flex">
              <div className="flex-1 ">
                <p className="">Color</p>
                <div className="flex gap-x-1 mt-1">
                  <div className="w-5 h-5 rounded-full bg-black"></div>
                  <div className="w-5 h-5 rounded-full bg-gray-500"></div>
                  <div className="w-5 h-5 rounded-full bg-blue-700"></div>
                  <div className="w-5 h-5 rounded-full bg-yellow-500"></div>
                  <div className="w-5 h-5 rounded-full bg-red-600"></div>
                </div>
              </div>
              <div className="flex-1 ">
                <p className="">Size</p>
                <div className="flex  items-center gap-x-1 mt-1 ">
                  <div className="text-xs p-2 flex items-center justify-center w-5 h-5 rounded-full bg-gray-300">
                    6
                  </div>
                  <div className="text-xs p-2 flex items-center justify-center w-5 h-5 rounded-full bg-gray-300">
                    7
                  </div>
                  <div className="text-xs p-2 flex items-center justify-center w-5 h-5 rounded-full bg-gray-300">
                    8
                  </div>
                  <div className="text-xs p-2 flex items-center justify-center w-5 h-5 rounded-full bg-gray-300">
                    9
                  </div>
                  <div className="text-xs p-2 flex items-center justify-center w-5 h-5 rounded-full bg-gray-300">
                    10
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-14 relative">
              <Button className="w-48 relative z-10">Add to Cart</Button>
              <Image
                src="/products/recycle-bin.png"
                alt="ReCycle Bin"
                width={20}
                height={20}
                className="absolute inset-0 right-[70%] top-3 left-auto z-20"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center h-16 bg-[#FFEADE] text-2xl font-semibold ">
          Related Products
        </div>
        <div className="my-4">
          <MultiProductSlider slides={cartProducts} />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
