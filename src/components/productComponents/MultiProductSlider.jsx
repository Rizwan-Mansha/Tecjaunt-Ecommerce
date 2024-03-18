"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./slider-style.css";

import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const MultiProductSlider = ({ slides }) => {
  return (
    <>
      <div className="relative ">
        <Swiper
          rewind={true}
          loop={true}
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className=" flex flex-col   border-[1px]  rounded-3xl  my-4   shadow-xl bg-gray-100 ">
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative py-12">
              {
                <div
                  key={index}
                  className="flex flex-col justify-center items-center border-[1px] border-red-300 rounded-3xl h-64  shadow-xl bg-gray-100">
                  <div className="mx-3 ">
                    <Image
                      src={slide.image}
                      alt=""
                      width={300}
                      height={300}
                      className="h-32"
                    />
                  </div>
                  <h3 className="text-lg text-center mt-4">{slide.title}</h3>
                  <p className="font-secondary text-center text-primary">
                    {"$"}
                    {`${slide.price}`}
                    {".00"}
                  </p>
                </div>
              }
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default MultiProductSlider;
