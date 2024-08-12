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
          We offer a comprehensive range of services to meet all your digital needs. Our team of experts is dedicated to delivering top-notch solutions that drive growth and innovation.
        </p>
      </div>
      <div className="w-100 mt-xxl-4 mt-md-5 tags pt-5 pb-3 ps-xxl-0 ps-2 text-xxl-start text-start ">
        <button className="btn bgcolor-secondary txtcolor-primary me-2 rounded-pill mb-2 border border-1 secondary-border">All</button>
        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill mb-2 border border-1 secondary-border ">E-commerce</button>
        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill mb-2 border border-1 secondary-border ">Web Design</button>
        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill mb-2 border border-1 secondary-border ">UI/UX</button>
        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill mb-2 border border-1 secondary-border ">Graphic Design</button>
        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill mb-2 border border-1 secondary-border ">AI/Prompt Engineering</button>
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
