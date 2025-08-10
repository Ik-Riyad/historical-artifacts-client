import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ScrollFloat from '../../../Reactbits/ScrollFloat/ScrollFloat';


const ClientSliders = [
  {
    name: "AMELIA MORGAN",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "It is a long established fact that a reader will be distracted by content of a page when looking at its layout.",
  },
  {
    name: "JANE SMITH",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "It is a long established fact that a reader will be distracted by content of a page when looking at its layout.",
  },
  {
    name: "MIA PARKER",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "It is a long established fact that a reader will be distracted by content of a page when looking at its layout.",
  },
  {
    name: "JOHNSON",
    image: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Clients are always happy when things go smoothly and efficiently.",
  },
  {
    name: "Michel",
    image: "https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "We got awesome feedback from our team and customers.",
  },
];

const ClientSlider = () => {
  return (
    <div className="bg-[#fffaf0] mt-32">
      <div className="text-8xl font-bold text-center text-[#3b1f00] mb-10 border-b border-[#3b1f00] w-fit mx-auto">
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
        >
          WHAT CLIENT SAY?
        </ScrollFloat>
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
        slideToClickedSlide={false}
        centeredSlides={false}
        slidesPerGroup={1} // Slide 1 card at a time
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {ClientSliders.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center min-h-[350px]">
              <img
                src={item.image}
                alt={item.name}
                className="w-30 h-30 rounded-full mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold text-[#3b1f00] py-3">{item.name}</h3>
              <p className="text-[#6e4e2f] text-xl mt-2">{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientSlider;
