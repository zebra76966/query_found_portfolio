import React from "react";
import "./master.css";
import { motion } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const Hero = ({ mobile }) => {
  return (
    <>
      {!mobile && (
        <div className="hero-box d-flex align-items-center justify-content-center">
          <motion.img src="./mascot3.png" className="hero-img" initial="hidden" animate="visible" exit="exit" variants={fadeUpVariants} transition={{ duration: 0.5, delay: 1 }} />

          <motion.div className="position-absolute top-right-text" initial="hidden" animate="visible" exit="exit" variants={fadeUpVariants} transition={{ duration: 0.5, delay: 0.8 }}>
            QUERY-FOUND
          </motion.div>

          <motion.div className="position-absolute left-text txtcolor-secondary " variants={fadeUpVariants} transition={{ duration: 0.5, delay: 1.1 }}>
            Designers
          </motion.div>

          <motion.div className="position-absolute bottom-text" initial="hidden" animate="visible" exit="exit" variants={fadeUpVariants} transition={{ duration: 0.5, delay: 1.5 }}>
            Developers
          </motion.div>

          <motion.div
            className="loader-wrapper"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeUpVariants}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <div className="loader2">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="svg">
                <img src="./icons/play.svg" alt="Play Icon" />
              </div>
            </div>
          </motion.div>
        </div>
      )}
      {mobile && (
        <div className="mobile hero-box">
          <div className="bordered-img-box animatedborder">
            <motion.img
              src={`${mobile ? "./mascot3.png" : "./hero.png"}`}
              className="hero-img"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeUpVariants}
              transition={{ duration: 0.5, delay: 1 }}
            />
          </div>

          <motion.div className="position-absolute mobile top-right-text" initial="hidden" animate="visible" exit="exit" variants={fadeUpVariants} transition={{ duration: 0.5, delay: 0.8 }}>
            QUERY<span className="d-block">FOUND</span>
          </motion.div>
          <motion.div className="position-absolute mobile left-text txtcolor-secondary " variants={fadeUpVariants} transition={{ duration: 0.5, delay: 1.1 }}>
            Developers
          </motion.div>
          <motion.div className="position-absolute mobile bottom-text" initial="hidden" animate="visible" exit="exit" variants={fadeUpVariants} transition={{ duration: 0.5, delay: 1.5 }}>
            Designers
          </motion.div>

          <motion.div
            className="mobile loader-wrapper"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeUpVariants}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <div class="loader2">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="svg">
                <img src="./icons/play.svg" />
              </div>
            </div>
          </motion.div>

          <motion.div className="position-absolute mobile left-socials" initial="hidden" animate="visible" exit="exit" variants={fadeUpVariants} transition={{ duration: 0.5, delay: 2 }}>
            <div className="bubble">
              <img src="./icons/instagram.svg" />
            </div>
            <div className="bubble">
              <img src="./icons/facebook.svg" />
            </div>
            <div className="bubble">
              <img src="./icons/linkedin.svg" />
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Hero;
