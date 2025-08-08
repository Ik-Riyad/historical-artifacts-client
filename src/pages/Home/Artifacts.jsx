import React, { use, useEffect, useState, useRef } from 'react';
import ArtifactsCards from './ArtifactsCards';
import { Link } from 'react-router';
import { motion, useInView, useAnimation } from 'framer-motion';

const Artifacts = ({ artifactsPromise }) => {
  const data = use(artifactsPromise);
  const [cards, setCards] = useState([]);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (data?.length > 0) {
      setCards(data.slice(0, 6));
    }
  }, [data]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const getVariants = (index) => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
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
        {
          cards.map((artifact, index) => (
            <motion.div
              key={artifact._id}
              variants={getVariants(index)}
              initial="hidden"
              animate={controls}
            >
              <ArtifactsCards artifact={artifact} />
            </motion.div>
          ))
        }
      </div>

      
        <Link to='/all-artifacts' className='my-20 flex justify-center'>
          <button className="btn bg-[#3E1B0B] text-white px-12 py-6 hover:scale-105 transition-transform duration-300">
            View More
          </button>
        </Link>
    </motion.section>
  );
};

export default Artifacts;
