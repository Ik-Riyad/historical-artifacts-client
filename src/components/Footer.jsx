import React from 'react';

import footerLogo from '../assets/resources/logo/footer-logo.svg'
import { MdOutlineHome, MdPhoneInTalk } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';
import { IoIosSend } from 'react-icons/io';

const Footer = () => {
    return (
        <footer className='bg-[#3E1B0B] text-white py-16 px-6'>
            <div className='max-w-7xl mx-auto'>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">

                    <div className="text-center lg:text-left">
                        <h3 className="text-xl font-bold mb-8 tracking-wide">CONTACT US</h3>
                        <div className="space-y-6">
                            <div className="flex items-center justify-center lg:justify-start gap-4">
                                <MdPhoneInTalk size={18} className="text-[#D4C4B0] opacity-80" />
                                <span className="text-base">+(559) 123-4567</span>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start gap-4">
                                <TfiEmail size={18} className="text-[#D4C4B0] opacity-80" />
                                <span className="text-base">Antique@email.com</span>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start gap-4">
                                <MdOutlineHome size={18} className="text-[#D4C4B0] opacity-80" />
                                <span className="text-base">789 Elm Avenue Sample City, Utopia</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="mb-6">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <img src={footerLogo} alt="" />
                            </div>
                        </div>
                        <p className="text-base leading-relaxed max-w-sm mx-auto opacity-90">
                            Contrary to popular belief, It has roots in a piece of literature from 45 BC, making it over 2000 years old.
                        </p>
                    </div>

                    <div className="text-center lg:text-right">
                        <h3 className="text-xl font-bold mb-8 tracking-wide">NEWS LETTER</h3>
                        <p className="text-base leading-relaxed mb-8 opacity-90">
                            Wander through time, where every object is a portal to a different world.
                        </p>
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative max-w-sm w-full">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-transparent border border-[#D4C4B0] border-opacity-40 px-4 py-3 pr-12 text-[#D4C4B0] placeholder-[#D4C4B0] placeholder-opacity-60 focus:outline-none focus:border-opacity-80 transition-colors"
                                />
                                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#D4C4B0] hover:text-white transition-colors">
                                    <IoIosSend size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#D4C4B0] border-opacity-20 mb-8"></div>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                    <div className="text-center lg:text-left">
                        <p className="text-xl opacity-80">
                            © 2025 - All Rights Reserved | Created By Webswaala
                        </p>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;