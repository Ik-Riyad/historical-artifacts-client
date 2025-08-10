import React, { use, useEffect, useState, useRef } from 'react';
import ArtifactsCards from './ArtifactsCards';
import { Link } from 'react-router';
import { motion, useInView, useAnimation } from 'framer-motion';

const Artifacts = ({ artifactsPromise }) => {
  const data = use(artifactsPromise);
  const [cards, setCards] = useState([]);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true }); // 👈 only animate once
  const controls = useAnimation();

  useEffect(() => {
    if (data?.length > 0) {
      setCards(data.slice(0, 6));
    }
  }, [data]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const getVariants = (index) => ({
    hidden: { opacity: 0, y: 100 }, // 👈 from bottom
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  });

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={controls}
    >
      <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10'>
        {cards.map((artifact, index) => (
          <motion.div
            key={artifact._id}
            variants={getVariants(index)}
          >
            <ArtifactsCards artifact={artifact} />
          </motion.div>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <Link to="/all-artifacts">
          <button
            className="border-2 border-[#3E1B0B] text-[#3E1B0B] rounded-lg shadow-md
             hover:bg-[#3E1B0B] hover:text-white
             focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2
             px-8 py-4 font-semibold
             transition-colors duration-300 flex items-center justify-center"
          >
            View Details
          </button>
        </Link>
      </div>

    </motion.section>
  );
};

export default Artifacts;
