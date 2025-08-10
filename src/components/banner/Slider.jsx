import React from 'react';

import slider01 from '../../assets/resources/sliders/slider.jpg';
import slider02 from '../../assets/resources/sliders/slider-02.jpg';
import slider03 from '../../assets/resources/sliders/slider-3.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Autoplay } from 'swiper/modules';
import BlurText from '../../../Reactbits/BlurText/BlurText';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';


const Slider = () => {

    return (
        <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 6000 }}
            fadeEffect={{ crossFade: true }}
            speed={1500}
        >

            <SwiperSlide>
                <div className='h-screen w-full flex flex-col lg:flex-row'>
                    <div className='flex-1 flex flex-col justify-center items-end py-8 lg:py-0 bg-[#F5F1E8] text-[#3E1B0B]'>
                        <div className=' text-right px-8 sm:px-12 lg:px-16 xl:px-20'>
                            <BlurText
                                text="[ DISCOVER THE PAST ]"
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="text-sm sm:text-base lg:text-lg font-normal mb-6 tracking-wide opacity-80 "
                            />

                            <BlurText
                                text={'UNEARTH ANCIENT TREASURES'}
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 tracking-tight"
                            />
                            <BlurText
                                text='Step into the stories etched in stone, bronze, and parchment. Explore rare artifacts that shaped civilizations and continue to inspire generations.'
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="text-base sm:text-lg lg:text-xl leading-relaxed mb-8 opacity-90"
                            />
                            <button
                                className="border-2 border-[#3E1B0B] text-[#3E1B0B] rounded-lg px-6 py-3 font-medium
                                hover:bg-[#3E1B0B] hover:text-white
                                focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2
                                transition-colors duration-300"
                            >
                                READ MORE
                            </button>
                        </div>
                    </div>

                    <div className='flex-1 relative overflow-hidden'>
                        <img
                            src={slider01}
                            alt="Ignite Young Minds 2025 Event"
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='h-screen w-full flex flex-col lg:flex-row'>
                    <div className='flex-1 flex flex-col justify-center items-end py-8 lg:py-0 bg-[#F5F1E8] text-[#3E1B0B]'>
                        <div className='text-right px-8 sm:px-12 lg:px-16 xl:px-20'>
                            <BlurText
                                text="[ ARTIFACTS THAT SPEAK ]"
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="text-sm sm:text-base lg:text-lg font-normal mb-6 tracking-wide opacity-80"
                            />

                            <BlurText
                                text={'Every Object Holds a Story'}
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 tracking-tight"
                            />
                            <BlurText
                                text='Journey through the centuries and witness the artistry, symbolism, and power behind each artifact. History lives here—waiting to be rediscovered.'
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="text-base sm:text-lg lg:text-xl leading-relaxed mb-8 opacity-90"
                            />
                            <button
                                className="border-2 border-[#3E1B0B] text-[#3E1B0B] rounded-lg px-6 py-3 font-medium
                                hover:bg-[#3E1B0B] hover:text-white
                                focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2
                                transition-colors duration-300"
                            >
                                READ MORE
                            </button>
                        </div>
                    </div>

                    <div className='flex-1 relative overflow-hidden'>
                        <img
                            src={slider02}
                            alt="Ignite Young Minds 2025 Event"
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='h-screen w-full flex flex-col lg:flex-row'>
                    <div className='flex-1 flex flex-col justify-center items-end py-8 lg:py-0 bg-[#F5F1E8] text-[#3E1B0B]'>
                        <div className='text-right px-8 sm:px-12 lg:px-16 xl:px-20'>
                            <BlurText
                                text="[ ECHOES FROM ANCIENT CIVILIZATIONS ]"
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="text-sm sm:text-base lg:text-lg font-normal mb-6 tracking-wide opacity-80"
                            />

                            <BlurText
                                text={'A Celebration of Culture and Craftsmanship'}
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 tracking-tight"
                            />
                            <BlurText
                                text='Join scholars, learners, and culture lovers as we unveil collections that celebrate the spirit of our ancestors and the brilliance of their legacy.'
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="text-base sm:text-lg lg:text-xl leading-relaxed mb-8 opacity-90"
                            />
                            <button
                                className="border-2 border-[#3E1B0B] text-[#3E1B0B] rounded-lg px-6 py-3 font-medium
                                hover:bg-[#3E1B0B] hover:text-white
                                focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2
                                transition-colors duration-300"
                            >
                                READ MORE
                            </button>
                        </div>
                    </div>

                    <div className='flex-1 relative overflow-hidden'>
                        <img
                            src={slider03}
                            alt="Ignite Young Minds 2025 Event"
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;