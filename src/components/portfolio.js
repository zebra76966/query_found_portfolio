import "./portfolio.css";
import React, { useState } from "react";
import Card from "./cards";
import { motion } from "framer-motion";
import datas from "./projects.json";
const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const Portfolio = ({ setCurentProj }) => {
  return (
    <motion.div className="ms-auto pe-3 pt-5 ps-0" style={{ width: "90%" }}>
      <h1 className="display-1 py-3 fw-bold txtcolor-secondary">Projects / Case Studies</h1>

      <p className="lead">
        Explore a selection of our crafted work combining unique designs and rich technology. We always build from scratch, creating memorable brands, engaging websites and digital products.
      </p>

      <div className="w-100 mt-4 tags pt-5 pb-3 ">
        <button className="btn bgcolor-secondary txtcolor-primary me-2 rounded-pill border border-1 secondary-border">All</button>
        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill border border-1 secondary-border ">E-commerce</button>
        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill border border-1 secondary-border ">Web Design</button>
        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill border border-1 secondary-border ">UI/UX</button>
        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill border border-1 secondary-border ">Graphic Design</button>
        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill border border-1 secondary-border ">AI/Prompt Engineering</button>
      </div>

      <div className="cotainer-fluid pb-5">
        <div className="row pb-5">
          {datas.map((ini, i) => {
            return (
              <div className="col-md-6 p-4" initial="hidden" animate="visible" exit="exit" variants={fadeUpVariants} transition={{ duration: 0.5, delay: 0.2 }}>
                <div
                  className="w-100"
                  onClick={() => {
                    setCurentProj(i + 1);
                  }}
                >
                  <Card data={ini} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
