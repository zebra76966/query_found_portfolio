import "./details.css";
import React, { useState, useEffect } from "react";
import Card from "./cards";
import { motion } from "framer-motion";
const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const Details = ({ data, setCurentProj }) => {
  const [stopanim, setStopAnim] = useState(false);

  return (
    <>
      <motion.div
        className="w-100 px-0 pt-4 pb-0  bgcolor-plain position-sticky start-0 w-100 d-flex justify-content-end"
        style={{ top: "-1%", zIndex: "98" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div
          className="p-md-3 p-4 ps-lg-3 ps-3 bgcolor-plain d-md-flex align-items-center justify-content-between text-lg-auto text-end position-sticky top-0 start-0"
          style={{ zIndex: "99", width: "90%", borderRadius: "0 0 20px 20px" }}
        >
          <div className="d-flex align-items-center justify-content-lg-start justify-content-end topBar ps-md-0 ps-1">
            <button
              onClick={() => {
                setCurentProj(0);
              }}
              className="btn btn-lg bgcolor-plain border-2 secondary-border closeDetBtn"
            >
              <i className="fa fa-arrow-left"></i>
            </button>
            <p className="py-0 my-0 ms-2 fs-5 txtcolor-secondary">Go back to Projects</p>
          </div>

          <button target="_blank" className="btn fs-5 p-lg-3 p-2 px-lg-4 px-3 bgcolor-secondary txtcolor-primary rounded-pill border border-1 secondary-border ms-auto get-in-touch">
            <div className="pulse"></div>
            <div className="pulse"></div>
            <div className="pulse"></div>

            <span className="me-2"> Get in Touch </span>
            <i className="fa fa-external-link-square fs-4"></i>
          </button>
        </div>
      </motion.div>
      <motion.div className="ms-auto pe-3 pt-2  ps-0 position-relative portDiv" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
        <div className="cotainer-fluid  d-flex align-items-center mb-4 pb-5 detHero">
          <div className="row ">
            <motion.div className="col-lg-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="w-100 txtcolor-secondary">
                <h1 className="display-1 pt-lg-3 pb-3 pt-lg-5 pt-2 mt-lg-0 mt-2  fw-bold">{data.name}</h1>
                <p className="display-5 mt-4">{data.small_desc}</p>
              </div>
            </motion.div>

            <motion.div className="col-lg-4 mt-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
              <div className="detailsVideoWrapper position-relative">
                <img src={data.images[0]} className="roundedimg shadow " />

                <div className=" position-absolute detailsVideo">
                  <div class="loader2" data-bs-toggle="modal" data-bs-target="#videoBoxLabel">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="svg">
                      <img src="./icons/play.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="col-lg-6 text-start mt-lg-5 pt-lg-5 pt-3 mt-3">
              <div className="w-100 d-flex justify-content-between">
                <a href={data.url} target="_blank" className="btn btn-lg fs-3 p-md-3 p-2 px-md-5 px-4 bgcolor-secondary txtcolor-primary me-2 rounded-pill border border-1 secondary-border">
                  <span className="me-2"> Visit Website </span>
                  <i className="fa fa-external-link-square fs-2"></i>
                </a>

                <div class="scrolldown d-lg-block d-none">
                  <div class="chevrons">
                    <div class="chevrondown"></div>
                    <div class="chevrondown"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end mt-lg-5 pt-lg-5 pt-3 mt-3">
              <div className="techStack ms-lg-auto">
                {data.tech_stack.map((ini) => {
                  return <button className="btn btn-lg bgcolor-plain txtcolor-secondary me-2 rounded-pill border border-1 secondary-border mb-1">{ini}</button>;
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="cotainer-fluid ">
          <div className="row ">
            <div className="col-12 mt-lg-4 mb-lg-4 mt-5 mb-0" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
              <img src={data.images[0]} className="roundedimg main shadow" />
            </div>

            <motion.div className="col-12 my-lg-5 my-2 pt-lg-4 pt-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
              <div className="w-100 txtcolor-secondary">
                <h1 className="display-4 py-2 fw-bold">Description</h1>
                <p className="fs-2 mt-1"> {data.desc} </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="col-md-6 my-lg-5 my-3 ">
              <img src={data.images[1]} className="roundedimg bodyimg shadow" />
            </motion.div>
            <motion.div className="col-md-6 my-lg-5 my-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
              <img src={data.images[2]} className="roundedimg bodyimg shadow" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="col-12 mt-5 pt-2">
              <div className="w-100 txtcolor-secondary my-4">
                <h1 className="display-4 py-2 fw-bold">Key Features</h1>
              </div>
              <div className={`features-section ${stopanim ? "" : "animated"} my-lg-5 my-3`}>
                <div className="features-section-inner" onMouseOver={() => setStopAnim(true)} onMouseLeave={() => setStopAnim(false)}>
                  {data.features.map((ini, i) => {
                    return (
                      <div className={`featurecard ${i % 2 == 0 ? "txtcolor-secondary bgcolor-plain" : "txtcolor-plain bgcolor-secondary"} shadow`}>
                        <h1 className="display-6 py-2 fw-bold">{ini.name}</h1>

                        <p className="thinScroll lead mt-md-4 mt-2 fw-bold">{ini.detail} </p>

                        <div className={`bottom-star ${i % 2 == 0 ? "txtcolor-secondary " : "txtcolor-plain"}`}>
                          <i className="fa fa-star fs-1"></i>
                        </div>
                      </div>
                    );
                  })}
                  {data.features.map((ini, i) => {
                    return (
                      <div className={`featurecard ${i % 2 == 0 ? "txtcolor-secondary bgcolor-plain" : "txtcolor-plain bgcolor-secondary"} shadow`}>
                        <h1 className="display-6 py-2 fw-bold">{ini.name}</h1>

                        <p className="thinScroll lead  mt-md-4 mt-2 fw-bold">{ini.detail} </p>
                        <div className={`bottom-star ${i % 2 == 0 ? "txtcolor-secondary " : "txtcolor-plain"}`}>
                          <i className="fa fa-star fs-1"></i>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div className="col-12 mt-md-5 mt-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
              <img src={data.images[3]} className="roundedimg main shadow" />
            </motion.div>

            <motion.div className="col-md-6 my-md-5 my-3 pe-md-4 " initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
              <img src={data.images[1]} className="roundedimg bodyimg shadow" />
            </motion.div>
            <motion.div className="col-md-6 my-md-5 my-3 ps-md-4 " initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
              <img src={data.images[2]} className="roundedimg bodyimg shadow" />
            </motion.div>

            {/* Final Thoughts */}
            <motion.div className="col-12 mt-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
              <div className="w-100 txtcolor-secondary my-md-5 my-2 py-md-5 py-2">
                <div className="d-flex align-items-center justify-content-center">
                  <div class="eye-container me-lg-4 me-2">
                    <div class="eye">
                      <div class="eyelid-wrapper">
                        <div class="eyelid blink1"></div>
                      </div>
                    </div>
                  </div>
                  <div class="eye-container ms-lg-4 ms-2">
                    <div class="eye">
                      <div class="eyelid-wrapper">
                        <div class="eyelid blink1"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="display-lg-5 display-6 py-4 fw-bold text-center txtcolor-secondary">
                  Looking for something <u>SPECIFIC</u> or <u>LIKE THIS</u>?
                </h1>

                <div className="text-center w-100 my-4 py-5">
                  <button target="_blank" className="btn fs-4 p-md-4 p-3 px-md-5 px-4 bgcolor-secondary txtcolor-plain rounded-pill border border-1 secondary-border mx-auto ">
                    <div className="pulse"></div>
                    <div className="pulse"></div>
                    <div className="pulse"></div>

                    <span className="me-2"> Get in Touch </span>
                    <i className="fa fa-external-link-square fs-4"></i>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Details;
