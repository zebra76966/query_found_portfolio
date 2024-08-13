import "./all_services.css";
import React, { useEffect, useState } from "react";
import Card from "./cards";
import { motion } from "framer-motion";
import datas2 from "./services.json";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const AllServices = ({ setCurentProj }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="ms-auto pe-md-3 pt-md-5 pt-2 ps-0 portDiv">
      <div className="p-md-0 p-3">
        <h1 className="display-1  pt-xxl-3 pb-md-3 pt-2 pb-3 fw-bold txtcolor-secondary">Our Services</h1>

        <p className="lead txtcolor-secondary">
          At Bharat Web Dev, we deliver comprehensive digital solutions that drive innovation and growth. Our expertise spans full-stack development, backend and frontend development, UI/UX design,
          AI-driven solutions, data science, and machine learning algorithms. We also offer graphics design, video editing, custom CRM automation, legacy code debugging, and website redesign and
          rebuilding. Our goal is to provide seamless, scalable, and tailored solutions that enhance your digital presence and operational efficiency.
        </p>
      </div>
      <div className="w-100 mt-xxl-4 mt-md-5 tags pt-5 pb-3 ps-xxl-0 ps-2 text-xxl-start text-start ">
        <button className="btn bgcolor-secondary txtcolor-primary me-2 rounded-pill mb-2 border border-1 secondary-border">All</button>
        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill mb-2 border border-1 secondary-border ">Django</button>
        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill mb-2 border border-1 secondary-border ">Flask</button>
        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill mb-2 border border-1 secondary-border ">React</button>
        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill mb-2 border border-1 secondary-border ">Node.js</button>

        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill mb-2 border border-1 secondary-border ">AWS</button>
        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill mb-2 border border-1 secondary-border ">Azure</button>

        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill mb-2 border border-1 secondary-border ">Nginx</button>

        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill mb-2 border border-1 secondary-border ">Apache</button>
        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill mb-2 border border-1 secondary-border ">WordPress</button>
        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill mb-2 border border-1 secondary-border ">WooCommerce </button>
        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill mb-2 border border-1 secondary-border ">Webflow</button>
        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill mb-2 border border-1 secondary-border ">PHP CodeIgniter</button>
      </div>

      <div className="cotainer-fluid pb-5 p-md-0  p-3">
        <div className="row pb-5">
          {datas2.map((ini, i) => {
            return (
              <div className="col-xxl-6 px-md-4 px-1 py-lg-4 py-3" initial="hidden" animate="visible" exit="exit" variants={fadeUpVariants} transition={{ duration: 0.5, delay: 0.2 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-100"
                  onClick={() => {
                    setCurentProj(i + 1);
                    window.history.pushState(null, null, `/products?item=${i + 1}`);
                  }}
                >
                  <Card data={ini} />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default AllServices;
