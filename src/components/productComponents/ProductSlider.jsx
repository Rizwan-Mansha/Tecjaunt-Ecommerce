"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./slider-style.css";

import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ProductSlider = ({ images }) => {


  return (
    <>
      <div className="relative ">
        <Swiper
          rewind={true}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className=" flex flex-col   border-[1px]  rounded-3xl     shadow-xl bg-gray-100 ">
          {images.map((img, index) => (
            <SwiperSlide key={index} className="relative ">
              {
                <div className=" font-tec  my-12 flex items-center justify-center ">
                  <Image
                    src="/products/product-slider-bg.png"
                    alt="bg"
                    width={200}
                    height={200}
                    className="absolute object-cover h-full w-full  -z-10"
                  />
                  <div className="">
                    <Image
                      src={img}
                      alt={img}
                      priority={true}
                      width={150}
                      height={150}
                      className=" object-fill flex m-20 h-60 w-[68%]  justify-center items-center "
                    />
                  </div>
                </div>
              }
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProductSlider;
