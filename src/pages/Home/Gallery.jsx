import React from 'react';
import img01 from '../../assets/resources/gallery/gallery-01.jpg'
import img02 from '../../assets/resources/gallery/gallery-02.jpg'
import img03 from '../../assets/resources/gallery/gallery-03.jpg'
import img04 from '../../assets/resources/gallery/gallery-04.jpg'
import img05 from '../../assets/resources/gallery/gallery-05.jpg'
import img06 from '../../assets/resources/gallery/gallery-06.jpg'

import { motion } from "framer-motion";
import ScrollFloat from '../../../Reactbits/ScrollFloat/ScrollFloat';


const Gallery = () => {
    return (
        <div className="px-4">
            <div>
                <h1 className="text-2xl sm:text-5xl lg:text-5xl font-extrabold text-center text-[#3E1B0B] w-fit mx-auto">
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=50%'
                        scrollEnd='bottom bottom-=40%'
                        stagger={0.03}
                    >
                        OUR GALLERY
                    </ScrollFloat>
                </h1>

                <div className="border-b-1 border-[#3E1B0B] md:w-100 mx-auto mb-15 "></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                    {[img01, img02, img03, img04, img05, img06].map((img, idx) => (
                        <motion.img
                            key={idx}
                            src={img}
                            alt={`product 0${idx + 1}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.7 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="w-full h-auto object-cover rounded-lg shadow-md"
                        />
                    ))}
                </div>
            </div>
        </div>



    );
};

export default Gallery;