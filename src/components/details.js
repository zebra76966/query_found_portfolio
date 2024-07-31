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
    <>
      <div className="w-100 p-5 bgcolor-plain position-fixed start-0 w-100" style={{ top: "-1%", zIndex: "100", height: "110px" }}></div>

      <motion.div className="ms-auto pe-3 pt-5 ps-0 position-relative" style={{ width: "90%" }}>
        <div className="w-100  p-3 bgcolor-plain d-flex align-items-center justify-content-between position-sticky top-0 start-0 w-100" style={{ zIndex: "99", borderRadius: "0 0 20px 20px" }}>
          <div className="d-flex align-items-center w-50">
            <button className="btn btn-lg bgcolor-plain border-2 secondary-border closeDetBtn">
              <i className="fa fa-arrow-left"></i>
            </button>
            <p className="py-0 my-0 ms-2 fs-5 txtcolor-secondary">Go back to Projects</p>
          </div>

          <button target="_blank" className="btn fs-5 p-3 px-4 bgcolor-secondary txtcolor-primary rounded-pill border border-1 secondary-border ms-auto get-in-touch">
            <div className="pulse"></div>
            <div className="pulse"></div>
            <div className="pulse"></div>

            <span className="me-2"> Get in Touch </span>
            <i className="fa fa-external-link-square fs-4"></i>
          </button>
        </div>

        <div className="cotainer-fluid  d-flex align-items-center" style={{ height: "80dvh" }}>
          <div className="row ">
            <div className="col-8">
              <div className="w-100 txtcolor-secondary">
                <h1 className="display-1 py-3 fw-bold">{data.name}</h1>
                <p className="display-5 mt-4">{data.small_desc}</p>
              </div>
            </div>

            <div className="col-md-4 mt-4" initial="hidden" animate="visible" exit="exit" variants={fadeUpVariants} transition={{ duration: 0.5, delay: 0.2 }}>
              <img src={data.images[0]} className="roundedimg shadow" />
            </div>

            <div className="col-md-6 text-start mt-5 pt-5 ">
              <div className="w-100 d-flex justify-content-between">
                <a href={data.url} target="_blank" className="btn btn-lg fs-3 p-3 px-5 bgcolor-secondary txtcolor-primary me-2 rounded-pill border border-1 secondary-border">
                  <span className="me-2"> Visit Website </span>
                  <i className="fa fa-external-link-square fs-2"></i>
                </a>

                <div class="scrolldown">
                  <div class="chevrons">
                    <div class="chevrondown"></div>
                    <div class="chevrondown"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-end mt-5 pt-5">
              {data.tech_stack.map((ini) => {
                return <button className="btn btn-lg bgcolor-plain txtcolor-secondary me-3 rounded-pill border border-1 secondary-border ">{ini}</button>;
              })}
            </div>
          </div>
        </div>

        <div className="cotainer-fluid ">
          <div className="row ">
            <div className="col-12 my-4" initial="hidden" animate="visible" exit="exit" variants={fadeUpVariants} transition={{ duration: 0.5, delay: 0.2 }}>
              <img src={data.images[0]} className="roundedimg main shadow" />
            </div>

            <div className="col-12 my-5 pt-4">
              <div className="w-100 txtcolor-secondary">
                <h1 className="display-4 py-2 fw-bold">Description</h1>
                <p className="fs-2 mt-1"> {data.desc} </p>
              </div>
            </div>

            <div className="col-6 my-5 " initial="hidden" animate="visible" exit="exit" variants={fadeUpVariants} transition={{ duration: 0.5, delay: 0.2 }}>
              <img src={data.images[1]} className="roundedimg bodyimg shadow" />
            </div>
            <div className="col-6 my-5" initial="hidden" animate="visible" exit="exit" variants={fadeUpVariants} transition={{ duration: 0.5, delay: 0.2 }}>
              <img src={data.images[2]} className="roundedimg bodyimg shadow" />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Details;
