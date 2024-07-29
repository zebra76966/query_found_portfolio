import React, { useEffect, useState, useRef } from "react";

const Services = ({ mobile }) => {
  const [enlarge, setEnlarge] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const [isPlay, setIsPlay] = useState(true);

  const [slideNumber, setSlideNumber] = useState(1);

  const [clickedDots, setClickedDots] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Clear any existing timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (enlarge) {
      // Handle slide progression if the dots are not clicked and isPlay is true
      if (!clickedDots && isPlay) {
        if (slideNumber < 5) {
          timeoutRef.current = setTimeout(() => {
            setSlideNumber((prevSlideNumber) => prevSlideNumber + 1);
          }, 8000);
        } else {
          setSlideNumber(1);
        }
      } else if (!isPlay) {
        // Clear timeout when not playing
        clearTimeout(timeoutRef.current);
      }

      // Reset clickedDots state
      if (clickedDots) {
        setClickedDots(false);
      }
    }
    // Cleanup function to clear timeout
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isPlay, slideNumber, clickedDots, enlarge]);

  useEffect(() => {
    if (isPlay || clickedDots) {
      setActiveTab(slideNumber - 1);
      controlCarousel(slideNumber - 1);
    }
  }, [slideNumber, isPlay, clickedDots, enlarge]);

  const controlCarousel = (target) => {
    if (enlarge) {
      console.log("here");
      const carousel = document.getElementById("carouselExampleIntervalB");
      const carouselInstance = window.bootstrap.Carousel.getOrCreateInstance(carousel);
      carouselInstance.to(target);
    }
  };

  return (
    <>
      {!mobile && (
        <div className={`box-services ${enlarge ? "project-enlarge" : ""} py-1 px-3`}>
          {!enlarge && (
            <>
              <div className={`text-head d-flex align-items-center justify-content-between my-1 `}>
                <h4 className="txtcolor-secondary fw-bold w-50  ps-4">Services</h4>
                <hr className="secondary-border border border-2 rounded w-25  " />
                <button className="p-3 icon-project-arrow-services border-0 ms-2" onClick={() => setEnlarge(!enlarge)}>
                  <img src="./icons/arrow-right copy.svg" />
                </button>
              </div>

              <div className="services-list thinScroll">
                <h2
                  className={`fw-bold list-slider  txtcolor-secondary display-6`}
                  data-bs-target="#carouselExampleIntervalB"
                  data-bs-slide-to="0"
                  onClick={() => {
                    setSlideNumber(1);
                    setActiveTab(0);
                  }}
                >
                  • FULL STACK DEVELOPEMENT
                </h2>
                <h2
                  className={`fw-bold list-slider txtcolor-secondary display-6`}
                  data-bs-target="#carouselExampleIntervalB"
                  data-bs-slide-to="1"
                  onClick={() => {
                    setSlideNumber(1);
                    setActiveTab(0);
                  }}
                >
                  • UI/UX DEVELOPEMENT
                </h2>
                <h2
                  className={`fw-bold list-slider txtcolor-secondary display-6`}
                  data-bs-target="#carouselExampleIntervalB"
                  data-bs-slide-to="2"
                  onClick={() => {
                    setSlideNumber(1);
                    setActiveTab(0);
                  }}
                >
                  • GRAPHIC DESIGN
                </h2>
                <h2
                  className={`fw-bold list-slider txtcolor-secondary display-6`}
                  data-bs-target="#carouselExampleIntervalB"
                  data-bs-slide-to="3"
                  onClick={() => {
                    setSlideNumber(1);
                    setActiveTab(0);
                  }}
                >
                  • AI / PROMPT ENGINEERING
                </h2>
              </div>
            </>
          )}

          {enlarge && (
            <div className="d-flex h-100">
              <div className="carousel-left position-relative">
                <div className={`text-head d-flex align-items-center justify-content-between my-3 `}>
                  <h4 className="txtcolor-secondary fw-bold w-50  ps-4">Services</h4>
                  <hr className="secondary-border border border-2 rounded w-25  " />
                  <button className="p-3 icon-project-arrow-services border-0 ms-2" onClick={() => setEnlarge(!enlarge)}>
                    <img src="./icons/arrow-right copy.svg" />
                  </button>
                </div>

                {/* Carousel */}
                <div id="carouselExampleIntervalB" className="carousel slide" data-bs-interval="false">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://portfolio-fiverr-self.vercel.app/artstore.jpg" className="d-block w-100 border border-2 p-2 secondary-border " style={{ borderRadius: "44px" }} alt="..." />

                      <div className="detail-block ps-4">
                        <div className="text-block d-flex align-items-center mt-4 mb-2">
                          <h6 className="txtcolor-secondary fw-bold   mb-0">Full Stack Development</h6>
                          <button className="p-3 icon-project-arrow-sm-services border-0 ms-2">
                            <img src="./icons/arrow-right-sm copy.svg" />
                          </button>
                        </div>

                        <button className="btn-sm txtcolor-secondary secondary-border border-1 border rounded-pill bgcolor-primary me-2">React JS</button>
                        <button className="btn-sm txtcolor-secondary secondary-border border-1 border rounded-pill bgcolor-primary me-2">Django</button>
                        <button className="btn-sm txtcolor-secondary secondary-border border-1 border rounded-pill bgcolor-primary me-2">Email Js</button>

                        <p className={`txtcolor-secondary mt-3 ${enlarge ? "viewText thinScroll" : "textShrink"}`}>
                          Developed a small e-merch store for and independent artist providing him the platform to sell his print media, posters, apparels etc. App uses email.js to directly send the
                          order...
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="https://portfolio-fiverr-self.vercel.app/carbon.jpeg" className="d-block w-100 border border-2 p-2 secondary-border " style={{ borderRadius: "44px" }} alt="..." />
                      <div className="detail-block ps-4">
                        <div className="text-block d-flex align-items-center mt-4 mb-2">
                          <h6 className="txtcolor-secondary fw-bold   mb-0">UI/UX Development</h6>
                          <button className="p-3 icon-project-arrow-sm-services border-0 ms-2">
                            <img src="./icons/arrow-right-sm copy.svg" />
                          </button>
                        </div>

                        <button className="btn-sm txtcolor-secondary secondary-border border-1 border rounded-pill bgcolor-primary me-2">React JS</button>
                        <button className="btn-sm txtcolor-secondary secondary-border border-1 border rounded-pill bgcolor-primary me-2">Django</button>
                        <button className="btn-sm txtcolor-secondary secondary-border border-1 border rounded-pill bgcolor-primary me-2">Email Js</button>

                        <p className={`txtcolor-secondary mt-3 ${enlarge ? "viewText thinScroll" : "textShrink"}`}>
                          Developed a small e-merch store for and independent artist providing him the platform to sell his print media, posters, apparels etc. App uses email.js to directly send the
                          order...
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="https://portfolio-fiverr-self.vercel.app/cal1.jpg" className="d-block w-100 border border-2 p-2 secondary-border " style={{ borderRadius: "44px" }} alt="..." />
                      <div className="detail-block ps-4">
                        <div className="text-block d-flex align-items-center mt-4 mb-2">
                          <h6 className="txtcolor-secondary fw-bold   mb-0">Graphic Design</h6>
                          <button className="p-3 icon-project-arrow-sm-services border-0 ms-2">
                            <img src="./icons/arrow-right-sm copy.svg" />
                          </button>
                        </div>

                        <button className="btn-sm txtcolor-secondary secondary-border border-1 border rounded-pill bgcolor-primary me-2">React JS</button>
                        <button className="btn-sm txtcolor-secondary secondary-border border-1 border rounded-pill bgcolor-primary me-2">Django</button>
                        <button className="btn-sm txtcolor-secondary secondary-border border-1 border rounded-pill bgcolor-primary me-2">Email Js</button>

                        <p className={`txtcolor-secondary mt-3 ${enlarge ? "viewText thinScroll" : "textShrink"}`}>
                          Developed a small e-merch store for and independent artist providing him the platform to sell his print media, posters, apparels etc. App uses email.js to directly send the
                          order...
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      {/* <img src="https://portfolio-fiverr-self.vercel.app/cal1.jpg" className="d-block w-100 border border-2 p-2 secondary-border " style={{ borderRadius: "44px" }} alt="..." /> */}
                      <div className="video-container">
                        <iframe
                          className="responsive-iframe"
                          src="https://www.youtube.com/embed/7qhvDvMeC1Y?autoplay=1&loop=1&mute=1&playlist=7qhvDvMeC1Y&controls=0&vq=hd720"
                          title="ai music videos are so hot - Luma Dream Machine"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="detail-block ps-4">
                        <div className="text-block d-flex align-items-center mt-4 mb-2">
                          <h6 className="txtcolor-secondary fw-bold   mb-0">AI / Prompt Engineering</h6>
                          <button className="p-3 icon-project-arrow-sm-services border-0 ms-2">
                            <img src="./icons/arrow-right-sm copy.svg" />
                          </button>
                        </div>

                        <button className="btn-sm txtcolor-secondary secondary-border border-1 border rounded-pill bgcolor-primary me-2">React JS</button>
                        <button className="btn-sm txtcolor-secondary secondary-border border-1 border rounded-pill bgcolor-primary me-2">Django</button>
                        <button className="btn-sm txtcolor-secondary secondary-border border-1 border rounded-pill bgcolor-primary me-2">Email Js</button>

                        <p className={`txtcolor-secondary mt-3 ${enlarge ? "viewText thinScroll" : "textShrink"}`}>
                          Developed a small e-merch store for and idependent artist probiding him the platform to sell his print media, posters, apparels etc. App uses email js to directly send the
                          order to the seller mail from there onward the seller can handle the user data and reuest using there CRM. Developed a small e-merch store for and idependent artist probiding
                          him the platform to sell his print media, posters, apparels etc. App uses email js to directly send the order to the seller mail from there onward the seller can handle the
                          user data and reuest using there CRM.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-between controlbar">
                  <div className="customIndicators ps-3 w-100">
                    <div className="progression-bar rounded-pill bgcolor-secondary p-1 w-50 d-flex align-items-center">
                      {!isPlay ? (
                        <button className="btn bg-none border-0 txtcolor-primary btn-lg btn-play" onClick={() => setIsPlay(!isPlay)}>
                          <i className="fa fa-play " />
                        </button>
                      ) : (
                        <button className="btn bg-none border-0 txtcolor-primary btn-lg btn-play" onClick={() => setIsPlay(!isPlay)}>
                          <i className="fa fa-pause " />
                        </button>
                      )}

                      <div
                        className={`progress-dot-services  ${slideNumber == 1 ? "active" : ""}${slideNumber == 2 ? "reset" : ""} ${!isPlay ? "pause" : ""} me-1`}
                        onClick={() => {
                          setSlideNumber(1);
                          setClickedDots(true);
                        }}
                      ></div>
                      <div
                        className={`progress-dot-services ${slideNumber == 2 ? "active" : ""}${slideNumber - 1 == 2 ? "reset" : ""} ${!isPlay ? "pause" : ""} me-1`}
                        onClick={() => {
                          setSlideNumber(2);
                          setClickedDots(true);
                        }}
                      ></div>
                      <div
                        className={`progress-dot-services ${slideNumber == 3 ? "active" : ""}${slideNumber - 1 == 3 ? "reset" : ""} ${!isPlay ? "pause" : ""} me-1`}
                        onClick={() => {
                          setSlideNumber(3);
                          setClickedDots(true);
                        }}
                      ></div>
                      <div
                        className={`progress-dot-services ${slideNumber == 4 ? "active" : ""}${slideNumber == 1 ? "reset" : ""} ${!isPlay ? "pause" : ""} me-1`}
                        onClick={() => {
                          setSlideNumber(4);
                          setClickedDots(true);
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <button
                      className="p-3 carousel-buttons bgcolor-secondary prev border-0 "
                      type="button"
                      data-bs-target="#carouselExampleIntervalB"
                      data-bs-slide="prev"
                      onClick={() => setSlideNumber(slideNumber - 1 !== 0 ? slideNumber - 1 : 4)}
                    >
                      <img src="/icons/chevron-right copy.svg" />
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="p-3 carousel-buttons bgcolor-secondary next border-0 ms-2 "
                      type="button"
                      data-bs-target="#carouselExampleIntervalB"
                      data-bs-slide="next"
                      onClick={() => setSlideNumber(slideNumber + 1 !== 5 ? slideNumber + 1 : 1)}
                    >
                      <img src="/icons/chevron-right copy.svg" />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="carousel-right ps-4" style={{ height: "88dvh" }}>
                <h2
                  className={`fw-bold list-slider txtcolor-secondary display-6 ${activeTab !== 0 ? "opacity-50" : ""}`}
                  data-bs-target="#carouselExampleIntervalB"
                  data-bs-slide-to="0"
                  onClick={() => {
                    setSlideNumber(1);
                    setActiveTab(0);
                  }}
                >
                  • FULL STACK DEVELOPEMENT
                </h2>
                <div className={`border-start border-2 secondary-border ${activeTab == 0 ? "mh-auto" : "mh-0"} `}></div>
                <h2
                  className={`fw-bold list-slider txtcolor-secondary display-6 ${activeTab !== 1 ? "opacity-50" : ""}`}
                  data-bs-target="#carouselExampleIntervalB"
                  data-bs-slide-to="1"
                  onClick={() => {
                    setSlideNumber(2);
                    setActiveTab(1);
                  }}
                >
                  • UI/UX DEVELOPEMENT
                </h2>
                <div className={`border-start border-2 secondary-border ${activeTab == 1 ? "mh-auto" : "mh-0"} ${activeTab == 1 - 1 ? "mh-auto-off" : ""}`}></div>
                <h2
                  className={`fw-bold list-slider txtcolor-secondary display-6 ${activeTab !== 2 ? "opacity-50" : ""}`}
                  data-bs-target="#carouselExampleIntervalB"
                  data-bs-slide-to="2"
                  onClick={() => {
                    setSlideNumber(3);
                    setActiveTab(2);
                  }}
                >
                  • GRAPHIC DESIGN
                </h2>
                <div className={`border-start border-2 secondary-border ${activeTab == 2 ? "mh-auto" : "mh-0"}  ${activeTab == 2 - 1 ? "mh-auto-off" : ""}`}></div>
                <h2
                  className={`fw-bold list-slider txtcolor-secondary display-6 ${activeTab !== 3 ? "opacity-50" : ""}`}
                  data-bs-target="#carouselExampleIntervalB"
                  data-bs-slide-to="3"
                  onClick={() => {
                    setSlideNumber(4);
                    setActiveTab(3);
                  }}
                >
                  • AI / PROMPT ENGINEERING
                </h2>
                <div className={`border-start border-2 secondary-border ${activeTab == 3 ? "mh-auto" : "mh-0"}  ${activeTab == 3 - 1 ? "mh-auto-off" : ""}`}></div>
              </div>
            </div>
          )}
        </div>
      )}

      {mobile && (
        <div className={`mobile box-services py-1 px-3`}>
          {/* {!enlarge && (
            <>
              <div className={`text-head d-flex align-items-center justify-content-between my-1 `}>
                <h4 className="txtcolor-secondary fw-bold w-50  ps-4">Services</h4>
                <hr className="secondary-border border border-2 rounded w-25  " />
                <button className="p-3 icon-project-arrow-services border-0 ms-2">
                  <img src="./icons/arrow-right copy.svg" />
                </button>
              </div>

              <div className="services-list thinScroll">
                <h2
                  className={`fw-bold list-slider  txtcolor-secondary display-6`}
                  data-bs-target="#carouselExampleIntervalB"
                  data-bs-slide-to="0"
                  onClick={() => {
                    setSlideNumber(1);
                    setActiveTab(0);
                  }}
                >
                  • FULL STACK DEVELOPEMENT
                </h2>
                <h2
                  className={`fw-bold list-slider txtcolor-secondary display-6`}
                  data-bs-target="#carouselExampleIntervalB"
                  data-bs-slide-to="1"
                  onClick={() => {
                    setSlideNumber(1);
                    setActiveTab(0);
                  }}
                >
                  • UI/UX DEVELOPEMENT
                </h2>
                <h2
                  className={`fw-bold list-slider txtcolor-secondary display-6`}
                  data-bs-target="#carouselExampleIntervalB"
                  data-bs-slide-to="2"
                  onClick={() => {
                    setSlideNumber(1);
                    setActiveTab(0);
                  }}
                >
                  • GRAPHIC DESIGN
                </h2>
                <h2
                  className={`fw-bold list-slider txtcolor-secondary display-6`}
                  data-bs-target="#carouselExampleIntervalB"
                  data-bs-slide-to="3"
                  onClick={() => {
                    setSlideNumber(1);
                    setActiveTab(0);
                  }}
                >
                  • AI / PROMPT ENGINEERING
                </h2>
              </div>
            </>
          )} */}

          <div className="h-100">
            <div className="carousel-left position-relative">
              <div className={`text-head d-flex align-items-center justify-content-between my-3 `}>
                <h4 className="txtcolor-secondary fw-bold w-50  ps-4">Services</h4>
                <hr className="secondary-border border border-2 rounded w-25  " />
                <button className="p-3 icon-project-arrow-services border-0 ms-2">
                  <img src="./icons/arrow-right copy.svg" />
                </button>
              </div>
            </div>

            <div className="carousel-right ps-4 serviceTab">
              <h2
                className={`fw-bold list-slider txtcolor-secondary display-6 ${activeTab !== 0 ? "opacity-50" : ""}`}
                data-bs-target="#carouselExampleIntervalB"
                data-bs-slide-to="0"
                onClick={() => {
                  setSlideNumber(1);
                  setActiveTab(0);
                }}
              >
                • FULL STACK DEVELOPEMENT
              </h2>
              <div className={`border-start border-2 secondary-border w-100 ${activeTab == 0 ? "mh-auto" : "mh-0"} `}>
                <div className={`ps-1 ${activeTab == 0 ? "mh-auto hideIn" : "mh-0 hideOut"}`}>
                  <img src="https://portfolio-fiverr-self.vercel.app/cal1.jpg" className="d-block w-100 border border-2 p-2 secondary-border " style={{ borderRadius: "44px" }} alt="..." />
                  <div className="detail-block ps-4 mt-2">
                    {/* <div className="text-block d-flex align-items-center mt-4 mb-2">
                      <h6 className="txtcolor-secondary fw-bold   mb-0">FULL STACK DEVELOPEMENT</h6>
                      <button className="p-3 icon-project-arrow-sm-services border-0 ms-2">
                        <img src="./icons/arrow-right-sm copy.svg" />
                      </button>
                    </div> */}

                    <button className="btn-sm txtcolor-secondary secondary-border border-1 border rounded-pill bgcolor-primary me-2">React JS</button>
                    <button className="btn-sm txtcolor-secondary secondary-border border-1 border rounded-pill bgcolor-primary me-2">Django</button>
                    <button className="btn-sm txtcolor-secondary secondary-border border-1 border rounded-pill bgcolor-primary me-2">AWS</button>

                    <p className={`txtcolor-secondary mt-3  viewText thinScroll `}>
                      Developed a small e-merch store for and idependent artist probiding him the platform to sell his print media, posters, apparels etc. App uses email js to directly send the order
                      to the seller mail from there onward the seller can handle the user data and reuest using there CRM. Developed a small e-merch store for and idependent artist probiding him the
                      platform to sell his print media, posters, apparels etc. App uses email js to directly send the order to the seller mail from there onward the seller can handle the user data and
                      reuest using there CRM.
                    </p>
                  </div>
                </div>
              </div>
              <h2
                className={`fw-bold list-slider txtcolor-secondary display-6 ${activeTab !== 1 ? "opacity-50" : ""}`}
                data-bs-target="#carouselExampleIntervalB"
                data-bs-slide-to="1"
                onClick={() => {
                  setSlideNumber(2);
                  setActiveTab(1);
                }}
              >
                • UI/UX DEVELOPEMENT
              </h2>
              <div className={`border-start border-2 secondary-border ${activeTab == 1 ? "mh-auto" : "mh-0"} ${activeTab == 1 - 1 ? "mh-auto-off" : ""}`}>
                <div className={`ps-1 ${activeTab == 1 ? "mh-auto hideIn" : "mh-0 hideOut"} ${activeTab == 1 - 1 ? "mh-auto-off" : ""}`}>
                  <img src="https://portfolio-fiverr-self.vercel.app/cal1.jpg" className="d-block w-100 border border-2 p-2 secondary-border " style={{ borderRadius: "44px" }} alt="..." />
                  <div className="detail-block ps-4 mt-2">
                    {/* <div className="text-block d-flex align-items-center mt-4 mb-2">
                      <h6 className="txtcolor-secondary fw-bold   mb-0">UI/UX DEVELOPEMENT</h6>
                      <button className="p-3 icon-project-arrow-sm-services border-0 ms-2">
                        <img src="./icons/arrow-right-sm copy.svg" />
                      </button>
                    </div> */}

                    <button className="btn-sm txtcolor-secondary secondary-border border-1 border rounded-pill bgcolor-primary me-2">Figma</button>
                    <button className="btn-sm txtcolor-secondary secondary-border border-1 border rounded-pill bgcolor-primary me-2">Adobe XD</button>

                    <p className={`txtcolor-secondary mt-3  viewText thinScroll `}>
                      Developed a small e-merch store for and idependent artist probiding him the platform to sell his print media, posters, apparels etc. App uses email js to directly send the order
                      to the seller mail from there onward the seller can handle the user data and reuest using there CRM. Developed a small e-merch store for and idependent artist probiding him the
                      platform to sell his print media, posters, apparels etc. App uses email js to directly send the order to the seller mail from there onward the seller can handle the user data and
                      reuest using there CRM.
                    </p>
                  </div>
                </div>
              </div>
              <h2
                className={`fw-bold list-slider txtcolor-secondary display-6 ${activeTab !== 2 ? "opacity-50" : ""}`}
                data-bs-target="#carouselExampleIntervalB"
                data-bs-slide-to="2"
                onClick={() => {
                  setSlideNumber(3);
                  setActiveTab(2);
                }}
              >
                • GRAPHIC DESIGN
              </h2>
              <div className={`border-start border-2 secondary-border ${activeTab == 2 ? "mh-auto" : "mh-0"}  ${activeTab == 2 - 1 ? "mh-auto-off" : ""}`}>
                <div className={`ps-1 ${activeTab == 2 ? "mh-auto hideIn" : "mh-0 hideOut"} ${activeTab == 2 - 1 ? "mh-auto-off" : ""}`}>
                  <img src="https://portfolio-fiverr-self.vercel.app/cal1.jpg" className="d-block w-100 border border-2 p-2 secondary-border " style={{ borderRadius: "44px" }} alt="..." />
                  <div className="detail-block ps-4 mt-2">
                    {/* <div className="text-block d-flex align-items-center mt-4 mb-2">
                      <h6 className="txtcolor-secondary fw-bold   mb-0">GRAPHIC DESIGN</h6>
                      <button className="p-3 icon-project-arrow-sm-services border-0 ms-2">
                        <img src="./icons/arrow-right-sm copy.svg" />
                      </button>
                    </div> */}

                    <button className="btn-sm txtcolor-secondary secondary-border border-1 border rounded-pill bgcolor-primary me-2">Illustrator</button>
                    <button className="btn-sm txtcolor-secondary secondary-border border-1 border rounded-pill bgcolor-primary me-2">Photoshop</button>
                    <button className="btn-sm txtcolor-secondary secondary-border border-1 border rounded-pill bgcolor-primary me-2">Animate</button>

                    <p className={`txtcolor-secondary mt-3  viewText thinScroll `}>
                      Developed a small e-merch store for and idependent artist probiding him the platform to sell his print media, posters, apparels etc. App uses email js to directly send the order
                      to the seller mail from there onward the seller can handle the user data and reuest using there CRM. Developed a small e-merch store for and idependent artist probiding him the
                      platform to sell his print media, posters, apparels etc. App uses email js to directly send the order to the seller mail from there onward the seller can handle the user data and
                      reuest using there CRM.
                    </p>
                  </div>
                </div>
              </div>
              <h2
                className={`fw-bold list-slider txtcolor-secondary display-6 ${activeTab !== 3 ? "opacity-50" : ""}`}
                data-bs-target="#carouselExampleIntervalB"
                data-bs-slide-to="3"
                onClick={() => {
                  setSlideNumber(4);
                  setActiveTab(3);
                }}
              >
                • AI / PROMPT ENGINEERING
              </h2>
              <div className={`border-start border-2 secondary-border ${activeTab == 3 ? "mh-auto" : "mh-0"}  ${activeTab == 3 - 1 ? "mh-auto-off" : ""}`}>
                <div className={`ps-1 ${activeTab == 3 ? "mh-auto hideIn" : "mh-0 hideOut"} ${activeTab == 3 - 1 ? "mh-auto-off" : ""}`}>
                  {/* <img src="https://portfolio-fiverr-self.vercel.app/cal1.jpg" className="d-block w-100 border border-2 p-2 secondary-border " alt="..." /> */}

                  <div className="video-container">
                    <iframe
                      className="responsive-iframe"
                      src="https://www.youtube.com/embed/7qhvDvMeC1Y?autoplay=1&loop=1&mute=1&playlist=7qhvDvMeC1Y&controls=0"
                      title="ai music videos are so hot - Luma Dream Machine"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="detail-block ps-4 mt-2">
                    {/* <div className="text-block d-flex align-items-center mt-4 mb-2">
                      <h6 className="txtcolor-secondary fw-bold   mb-0">AI / PROMPT ENGINEERING</h6>
                      <button className="p-3 icon-project-arrow-sm-services border-0 ms-2">
                        <img src="./icons/arrow-right-sm copy.svg" />
                      </button>
                    </div> */}

                    <button className="btn-sm txtcolor-secondary secondary-border border-1 border rounded-pill bgcolor-primary me-2">Stable Diffusion</button>
                    <button className="btn-sm txtcolor-secondary secondary-border border-1 border rounded-pill bgcolor-primary me-2">Midjourney</button>
                    <button className="btn-sm txtcolor-secondary secondary-border border-1 border rounded-pill bgcolor-primary me-2">GPT</button>

                    <p className={`txtcolor-secondary mt-3  viewText thinScroll `}>
                      Developed a small e-merch store for and idependent artist probiding him the platform to sell his print media, posters, apparels etc. App uses email js to directly send the order
                      to the seller mail from there onward the seller can handle the user data and reuest using there CRM. Developed a small e-merch store for and idependent artist probiding him the
                      platform to sell his print media, posters, apparels etc. App uses email js to directly send the order to the seller mail from there onward the seller can handle the user data and
                      reuest using there CRM.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
