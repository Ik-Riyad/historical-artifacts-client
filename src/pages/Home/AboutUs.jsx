import React from "react";
import { FaShieldAlt, FaSearch, FaBook } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className="font-serif text-[#3E1B0B] ">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="uppercase tracking-widest text-sm text-[#D4AF37] mb-2">
                        Our Story
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
                        Preserving History's Legacy
                    </h1>
                    <p className="text-lg text-[#5C3B2E] leading-relaxed mb-8">
                        For over three decades, Antiqua has been the world's premier destination
                        for authentic ancient artifacts. We bridge the gap between past and present,
                        offering collectors and enthusiasts access to pieces that have shaped
                        civilizations and continue to inspire wonder.
                    </p>
                    <div className="flex gap-10 text-center">
                        <div>
                            <h3 className="text-2xl font-bold text-[#D4AF37]">30+</h3>
                            <p className="text-sm text-[#5C3B2E]">Years Experience</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#D4AF37]">5000+</h3>
                            <p className="text-sm text-[#5C3B2E]">Artifacts Curated</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#D4AF37]">50+</h3>
                            <p className="text-sm text-[#5C3B2E]">Countries Sourced</p>
                        </div>
                    </div>
                </div>

                {/* Featured Artifact Card */}
                <div className="bg-[#C09A7A] shadow-lg rounded-xl p-12 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2103/2103273.png"
                        alt="Ancient Pottery"
                        className="w-20 h-20 mb-6"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-white">
                        Ancient Pottery Collection
                    </h3>
                    <p className="text-sm text-[#FDEBD0]">Mesopotamian Era</p>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-[#FFFDF8] py-16">
                <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-[#3E1B0B] rounded-full text-white text-2xl">
                            <FaSearch />
                        </div>
                        <h4 className="text-lg font-bold mb-2">Authenticate</h4>
                        <p className="text-[#5C3B2E] text-sm leading-relaxed">
                            Every piece undergoes rigorous authentication by world-renowned experts
                            and advanced testing to ensure historical accuracy.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-[#3E1B0B] rounded-full text-white text-2xl">
                            <FaShieldAlt />
                        </div>
                        <h4 className="text-lg font-bold mb-2">Preserve</h4>
                        <p className="text-[#5C3B2E] text-sm leading-relaxed">
                            We use state-of-the-art conservation techniques to maintain the
                            integrity and beauty of each artifact for generations.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-[#3E1B0B] rounded-full text-white text-2xl">
                            <FaBook />
                        </div>
                        <h4 className="text-lg font-bold mb-2">Educate</h4>
                        <p className="text-[#5C3B2E] text-sm leading-relaxed">
                            Beyond collecting, we share knowledge about ancient civilizations
                            and the cultural significance of each artifact.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
