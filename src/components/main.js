import React, { useState, useEffect, useRef } from "react";
import Header from "./header";
import Hero from "./hero";
import Bar from "./emailjs/bar";
import Project from "./projects";
import Services from "./services";
import { motion } from "framer-motion";
import Portfolio from "./portfolio";
import Details from "./details";
import datas from "./projects.json";
const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};
const Main = () => {
  const [mobile, setMobile] = useState(window.innerWidth < 1400);
  const [portfolio, setFolio] = useState(false);
  const [activeProj, setCurentProj] = useState(0);

  useEffect(() => {
    if (window.location.pathname.includes("/projects")) {
      setFolio(true);
    } else {
      setFolio(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 1400);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!portfolio) {
      setCurentProj(0);
    }
  }, [portfolio]);

  const containerRef = useRef(null);

  useEffect(() => {
    if (activeProj === 0 && containerRef.current) {
      setTimeout(() => {
        containerRef.current.scrollTop = 0;
      }, 500);
      // Scrolls the element to the top
    }
  }, [activeProj]);

  return (
    <>
      {console.log(activeProj)}
      <div className="startload">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <h2 className="display-5 ">Loading...</h2>
        </div>
      </div>

      <div className={`${mobile ? "" : "hero"} d-flex align-items-center justify-content-center`}>
        <div className="row w-100">
          <motion.div className={`${mobile ? "" : "col-lg-1"} mobileBar`} initial="hidden" animate="visible" exit="exit" variants={fadeUpVariants} transition={{ duration: 0.5, delay: 1 }}>
            <Header mobile={mobile} setFolio={(e) => setFolio(e)} setCurentProj={(e) => setCurentProj(e)} />

            {!mobile && (
              <div className="position-absolute desk-left-socials">
                <div className="bubble">
                  <img src="./icons/instagram.svg" />
                </div>
                <div className="bubble">
                  <img src="./icons/facebook.svg" />
                </div>
                <div className="bubble">
                  <img src="./icons/linkedin.svg" />
                </div>
              </div>
            )}
          </motion.div>
          <div className=" col-xxl-7 position-relative">
            <Hero mobile={mobile} />

            <Bar mobile={mobile} />

            {mobile && (
              <>
                <Project mobile={mobile} />
                <div className="dotted-border"></div>
              </>
            )}

            {mobile && <Services mobile={mobile} />}
          </div>
          <div className={`col-lg-3 col-xxl-4 col-12 p-0 chk thinScroll ${mobile ? "d-none" : ""}`}>
            <div className="d-flex justify-content-end">
              <Project mobile={mobile} />
            </div>
            <div className={`d-flex justify-content-end ${mobile ? "d-none" : ""}`}>
              <Services mobile={mobile} />
            </div>
          </div>
        </div>
      </div>

      <div className={`container-fluid portfolio ${portfolio ? "in" : "out"} thinScroll`}>
        <Portfolio setCurentProj={(e) => setCurentProj(e)} />
      </div>

      <div ref={containerRef} className={`container-fluid dets ${activeProj !== 0 ? "in" : "out"} thinScroll h-100`} style={{ zIndex: 100 }}>
        <Details data={datas[activeProj !== 0 ? activeProj - 1 : activeProj]} setCurentProj={(e) => setCurentProj(e)} />
      </div>

      <div className="container-fluid">
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content  bgcolor-secondary" style={{ borderRadius: "20px" }}>
              <div class="modal-header border-0">
                <button type="button" className="btn ms-auto bgcolor-primary p-3 rounded-circle " data-bs-dismiss="modal" aria-label="Close">
                  <img src="./icons/close.svg" />
                </button>
              </div>
              <div class="modal-body">
                <iframe
                  width="100%"
                  height="720"
                  src="https://www.youtube.com/embed/0OojfeXlsWE"
                  title="Final Edit 1"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
