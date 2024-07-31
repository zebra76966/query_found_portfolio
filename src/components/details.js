import "./details.css";
import React from "react";
import Card from "./cards";
import { motion } from "framer-motion";
const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const Details = ({ data }) => {
  return (
    <motion.div className="ms-auto pe-3 pt-5 ps-0" style={{ width: "90%" }}>
      {/* <div className="w-100 mt-4 tags pt-5 pb-3 ">
        <button className="btn bgcolor-secondary txtcolor-primary me-2 rounded-pill border border-1 secondary-border">All</button>
        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill border border-1 secondary-border ">E-commerce</button>
        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill border border-1 secondary-border ">Web Design</button>
        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill border border-1 secondary-border ">UI/UX</button>
        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill border border-1 secondary-border ">Graphic Design</button>
        <button className="btn bgcolor-plain txtcolor-secondary me-2 rounded-pill border border-1 secondary-border ">AI/Prompt Engineering</button>
      </div> */}

      <div className="cotainer-fluid pb-5 mt-5">
        <div className="row pb-5">
          <div className="col-8 d-flex align-items-center">
            <div className="w-100 txtcolor-secondary">
              <h1 className="display-1 py-3 fw-bold">{data.name}</h1>
              <p className="display-5 ">{data.small_desc}</p>
            </div>
          </div>
          <div className="col-md-4 mt-4" initial="hidden" animate="visible" exit="exit" variants={fadeUpVariants} transition={{ duration: 0.5, delay: 0.2 }}>
            <img src={data.images[0]} className="roundedimg shadow" />
          </div>
          <div className="col-12 text-end mt-5">
            {data.tech_stack.map((ini) => {
              return <button className="btn btn-lg bgcolor-plain txtcolor-secondary me-3 rounded-pill border border-1 secondary-border ">{ini}</button>;
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Details;
