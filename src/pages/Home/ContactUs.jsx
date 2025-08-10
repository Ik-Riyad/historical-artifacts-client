import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const ContactUs = () => {
    const formRef = useRef(null);
    const isInView = useInView(formRef, {
        once: true,
        margin: '-40% 0px -40% 0px',
    });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add form submission logic here (e.g., send to API)
        alert('Form submitted!');
    };

    return (
        <motion.section
            ref={formRef}
            initial="hidden"
            animate={controls}
            variants={variants}
            className="max-w-3xl mx-auto px-6 py-16 "
        >
            <h2 className="text-4xl font-bold text-center mb-12 text-[#3E1B0B]">
                Contact Us
            </h2>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-lg p-8 grid gap-6"
            >
                <label className="flex flex-col">
                    <span className="mb-2 font-semibold text-[#3E1B0B]">Name</span>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your full name"
                        className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3E1B0B]"
                    />
                </label>

                <label className="flex flex-col">
                    <span className="mb-2 font-semibold text-[#3E1B0B]">Email</span>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3E1B0B]"
                    />
                </label>

                <label className="flex flex-col">
                    <span className="mb-2 font-semibold text-[#3E1B0B]">Message</span>
                    <textarea
                        name="message"
                        rows="5"
                        required
                        placeholder="Write your message here..."
                        className="border border-gray-300 rounded px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#3E1B0B]"
                    />
                </label>

                <button
                    type="submit"
                    className="btn bg-[#3E1B0B] text-white py-4 mt-4 hover:scale-105 transition-transform duration-300 rounded"
                >
                    Send Message
                </button>
            </form>
        </motion.section>
    );
};

export default ContactUs;
