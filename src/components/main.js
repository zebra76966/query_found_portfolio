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
import datas2 from "./services.json";
import AllServices from "./all_services";
import About from "./about";
import TopBar from "./topbar";
const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};
const Main = () => {
  const [mobile, setMobile] = useState(window.innerWidth < 1400);
  const [portfolio, setFolio] = useState(false);
  const [activeProj, setCurentProj] = useState(0);

  const [activeProj2, setCurentProj2] = useState(0);
  const [allServices, setAllServices] = useState(false);

  const [about, setAbout] = useState(false);

  const portfolioRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  useEffect(() => {
    if (!mobile) {
      const handleWheel = (event) => {
        if (event.deltaY > 0) {
          // User scrolls down
          setFolio(true);
          if (!about && !allServices) {
            window.history.pushState(null, null, "/projects");
          }
        }
      };

      const handleTouchStart = (event) => {
        window.initialTouchY = event.touches[0].clientY;
      };

      const handleTouchMove = (event) => {
        const currentTouchY = event.touches[0].clientY;
        if (window.initialTouchY > currentTouchY) {
          // User scrolls down
          setFolio(true);
          window.history.pushState(null, null, "/projects");
        }
      };

      const handlePortfolioScroll = () => {
        if (portfolioRef.current) {
          const { scrollTop, scrollHeight, clientHeight } = portfolioRef.current;

          // If the user has scrolled back to the top, set portfolio to false
          if (scrollTop === 0) {
            setFolio(false);
            window.history.pushState(null, null, "/");
          }

          // If the user has scrolled to the very bottom, set allServices to true
          if (scrollTop + clientHeight >= scrollHeight) {
            setAllServices(true);
            window.history.pushState(null, null, "/products");
          }
        }
      };

      const handleServicesScroll = () => {
        if (servicesRef.current) {
          const { scrollTop, clientHeight, scrollHeight } = servicesRef.current;

          // If the user has scrolled back to the top, set portfolio to true
          if (scrollTop === 0) {
            setFolio(true);
            setAllServices(false);
            window.history.pushState(null, null, "/projects");
          }

          // If the user has scrolled to the very bottom, set allServices to true
          if (scrollTop + clientHeight >= scrollHeight) {
            setAbout(true);
            window.history.pushState(null, null, "/about");
          }
        }
      };

      const handleAboutScroll = () => {
        if (aboutRef.current) {
          const { scrollTop, clientHeight, scrollHeight } = aboutRef.current;

          // If the user has scrolled back to the top, set portfolio to true
          if (scrollTop === 0) {
            setAllServices(true);
            setAbout(false);
            window.history.pushState(null, null, "/products");
          }
        }
      };

      if (!portfolio) {
        window.addEventListener("wheel", handleWheel);
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleTouchMove);
      } else {
        const currentPortfolioRef = portfolioRef.current;
        const currentServicesRef = servicesRef.current;
        const currentAboutRef = aboutRef.current;

        if (currentPortfolioRef) {
          const scrollTop = currentPortfolioRef.scrollTop;
          setTimeout(() => {
            currentPortfolioRef.scrollTop = 20;
          }, 900);

          currentPortfolioRef.addEventListener("scroll", handlePortfolioScroll);
        }

        if (currentServicesRef) {
          const scrollTop = currentServicesRef.scrollTop;

          setTimeout(() => {
            currentServicesRef.scrollTop = 20;
          }, 900);
          currentServicesRef.addEventListener("scroll", handleServicesScroll);
        }
        if (currentAboutRef) {
          const scrollTop = currentAboutRef.scrollTop;

          setTimeout(() => {
            currentAboutRef.scrollTop = 20;
          }, 900);
          currentAboutRef.addEventListener("scroll", handleAboutScroll);
        }
      }

      return () => {
        window.removeEventListener("wheel", handleWheel);
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
        if (portfolioRef.current) {
          portfolioRef.current.removeEventListener("scroll", handlePortfolioScroll);
        }
        if (servicesRef.current) {
          servicesRef.current.removeEventListener("scroll", handleServicesScroll);
        }
        if (aboutRef.current) {
          aboutRef.current.removeEventListener("scroll", handleAboutScroll);
        }
      };
    }
  }, [portfolio, mobile, allServices, about]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const itemValue = parseInt(searchParams.get("item"));

    if (window.location.pathname.includes("/projects")) {
      setFolio(true);
      if (itemValue) {
        if (itemValue) {
          setTimeout(() => {
            setCurentProj(parseInt(itemValue));
          }, 500);
        }
      }
    } else if (window.location.pathname.includes("/products")) {
      setAllServices(true);
      if (itemValue) {
        setTimeout(() => {
          setCurentProj2(parseInt(itemValue));
        }, 500);
      }
    } else if (window.location.pathname.includes("/about")) {
      setAbout(true);
      console.log("HERE");
      // if (itemValue) {
      //   setTimeout(() => {
      //     setCurentProj2(parseInt(itemValue));
      //   }, 500);
      // }
    } else {
      setAllServices(false);
      setFolio(false);
      setAbout(false);
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
    if (!portfolio || !allServices) {
      setCurentProj(0);
      setCurentProj2(0);
    }
  }, [portfolio, allServices]);

  const containerRef = useRef(null);

  useEffect(() => {
    if (activeProj === 0 && containerRef.current) {
      setTimeout(() => {
        containerRef.current.scrollTop = 0;
      }, 500);
      // Scrolls the element to the top
    }
  }, [activeProj, activeProj2]);

  const [isload, setIsload] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsload(1);
    }, 3000);
  }, []);

  // Back and Fourth ===============>
  useEffect(() => {
    const handlePopState = () => {
      const currentPath = window.location.pathname;
      const searchParams = new URLSearchParams(window.location.search);
      const itemValue = parseInt(searchParams.get("item"));

      if (currentPath.includes("/projects")) {
        // Update state based on the "/projects" path

        setFolio(true);
        setAllServices(false);
        if (itemValue) {
          if (itemValue) {
            setTimeout(() => {
              setCurentProj(parseInt(itemValue));
            }, 500);
          }
        } else {
          setCurentProj(0);
        }
      } else if (currentPath.includes("/products")) {
        // Update state based on the "/projects" path

        setFolio(false);
        setAllServices(true);
        if (itemValue) {
          if (itemValue) {
            setTimeout(() => {
              setCurentProj2(parseInt(itemValue));
            }, 500);
          }
        } else {
          setCurentProj2(0);
        }
      } else if (currentPath.includes("/about")) {
        // Update state based on the "/projects" path

        setFolio(false);
        setAllServices(false);
        setAbout(true);
        // if (itemValue) {
        //   if (itemValue) {
        //     setTimeout(() => {
        //       setCurentProj2(parseInt(itemValue));
        //     }, 500);
        //   }
        // } else {
        //   setCurentProj2(0);
        // }
      } else {
        // Set default state or handle other paths

        setFolio(false);
        setAllServices(false);
        setAbout(false);
        setCurentProj(0);
      }
    };

    // Add event listener for popstate event
    window.addEventListener("popstate", handlePopState);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []); // Empty dependency array to ensure it runs only once on mount
  // Back and Foruth ENds

  return (
    <>
      <TopBar />
      {isload == 0 && (
        <div className="startload">
          <div className="h-100 d-flex align-items-center justify-content-center">
            <h2 className="display-5 ">Loading...</h2>
          </div>
        </div>
      )}
      {mobile && (
        <div className="logo-box">
          <img src="./logo.png" />
        </div>
      )}

      <div className={`${mobile ? "" : "hero"} d-flex align-items-center justify-content-center`}>
        <div className="row w-100">
          <motion.div
            className={`${mobile ? "" : "col-lg-1"} mobileBar bgcolor-plain ${mobile ? "shadow-lg roundedTopBar" : ""}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeUpVariants}
            transition={{ duration: 0.5, delay: 3 }}
          >
            <Header
              mobile={mobile}
              setFolio={(e) => setFolio(e)}
              setCurentProj={(e) => {
                setCurentProj(e);
                setCurentProj(e);
              }}
              folio={portfolio}
              setAllServices={(e) => setAllServices(e)}
              allServices={allServices}
              activeProj={activeProj}
              setAbout={(e) => setAbout(e)}
              about={about}
            />

            {!mobile && (
              <div className="position-absolute desk-left-socials">
                <a href="#" target="_blank" className="bubble">
                  <img src="./icons/instagram.svg" />
                </a>
                <a href="#" target="_blank" className="bubble">
                  <img src="./icons/facebook.svg" />
                </a>
                <a href="https://www.linkedin.com/company/bharat-web-dev/?viewAsMember=true" target="_blank" className="bubble">
                  <img src="./icons/linkedin.svg" />
                </a>
              </div>
            )}
          </motion.div>
          <div className=" col-xxl-7 position-relative">
            <Hero mobile={mobile} />

            <Bar mobile={mobile} origin={"home"} />

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
      {/* Portfolio Start==================> */}
      <div className={`container-fluid portfolio ${portfolio ? "in" : "out"} thinScroll`} ref={portfolioRef}>
        <Portfolio setCurentProj={(e) => setCurentProj(e)} />
      </div>

      <div ref={containerRef} className={`container-fluid dets ${activeProj !== 0 ? "in" : "out"} thinScroll h-100`} style={{ zIndex: 100 }}>
        <Details data={datas[activeProj !== 0 ? activeProj - 1 : activeProj]} setCurentProj={(e) => setCurentProj(e)} origin={"projects"} mobile={mobile} />
      </div>
      {/* Portfolio End====================> */}

      {/* Services Start===================> */}
      <div className={`container-fluid allServices ${allServices ? "in" : "out"} thinScroll`} ref={servicesRef}>
        <AllServices setCurentProj={(e) => setCurentProj2(e)} />
      </div>

      <div ref={containerRef} className={`container-fluid allServicedets ${activeProj2 !== 0 ? "in" : "out"} thinScroll h-100`} style={{ zIndex: 100 }}>
        <Details data={datas2[activeProj2 !== 0 ? activeProj2 - 1 : activeProj2]} setCurentProj={(e) => setCurentProj2(e)} origin={"products"} mobile={mobile} />
      </div>
      {/* Services End===================> */}

      {/* ABout Start ==============================================> */}
      <div ref={aboutRef} className={`container-fluid allServicedets portfolio ${about == true ? "in" : "out"} thinScroll h-100`} style={{ zIndex: 100 }}>
        <About mobile={mobile} />
      </div>
      {/* About End ================================================> */}

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

      <div className="container-fluid">
        <div class="modal fade" id="videoBoxLabel" tabindex="2" aria-labelledby="videoBoxLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content  bgcolor-secondary" style={{ borderRadius: "20px" }}>
              <div class="modal-header border-0">
                <button type="button" className="btn ms-auto bgcolor-primary p-3 rounded-circle " data-bs-dismiss="modal" aria-label="Close">
                  <img src="./icons/close.svg" />
                </button>
              </div>
              <div class="modal-body">
                {activeProj !== 0 && datas[activeProj - 1].video != "false" ? (
                  <video width="100%" height="100%" autoplay controls>
                    <source src={datas[activeProj - 1].video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : about ? (
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
                ) : (
                  <h4 className="display-6 txtcolor-primary text-center py-5">Video not available at the moment.</h4>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="getIntouch" tabindex="-1" aria-labelledby="getIntouch" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content border-0">
            <Bar mobile={mobile} origin={"details"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
