import React from 'react';
import secImage from '../../assets/resources/story/vintage.jpg'
import ClientSlider from './ClientSlider';
import Gallery from './Gallery';


const Sections = () => {
    return (
        <div className='my-44'>
            <section
                className="h-[65vh] bg-fixed bg-center bg-cover flex items-center justify-center "
                style={{ backgroundImage: `url(${secImage})` }}
            >
                <div className='text-center flex flex-col items-center'>
                    <h1 className="text-white text-5xl font-extrabold">VINTAGE FINDS</h1>
                    <div className='border-b w-4/5 md:w-100 border-white mt-5 mb-7'></div>
                    <p className=' text-white text-xl'>Antiques have a magic about them. They connect us to forgotten <br /> eras, sparking our imaginations and inviting us to the lives <br /> they’ve touched before reaching ours</p>
                    <button
                        className="border-2 border-white text-white rounded-lg px-6 py-3 font-medium
                        hover:bg-[#3E1B0B] hover:text-white
                        focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2
                        transition-colors duration-300 mt-10"
                    >
                        View More
                    </button>

                </div>
            </section>

            <section className=' xl:mx-64 mt-38'>
                <Gallery></Gallery>
            </section>

            {/* WHAT CLIENT SAY? section */}
            <section className='md:mx-15 xl:mx-64 '>
                <ClientSlider></ClientSlider>
            </section>

        </div>
    );
};

export default Sections;