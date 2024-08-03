import React, { useEffect, useState, useRef } from "react";
import datas from "./projects.json";
const Project = ({ mobile }) => {
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

    // Handle slide progression if the dots are not clicked and isPlay is true
    if (!clickedDots && isPlay) {
      if (slideNumber < 4) {
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

    // Cleanup function to clear timeout
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isPlay, slideNumber, clickedDots]);

  useEffect(() => {
    if (isPlay || clickedDots) {
      setActiveTab(slideNumber - 1);
      controlCarousel(slideNumber - 1);
    }
  }, [slideNumber, isPlay, clickedDots]);

  const controlCarousel = (target) => {
    const carousel = document.getElementById("carouselExampleInterval");
    const carouselInstance = window.bootstrap.Carousel.getOrCreateInstance(carousel);
    carouselInstance.to(target);
  };

  return (
    <>
      {!mobile && (
        <div className={`box-projects ${enlarge ? "project-enlarge" : ""} py-4 px-3`}>
          <div className="d-flex h-100">
            <div className="carousel-left position-relative">
              <div className={`text-head d-flex align-items-center justify-content-between my-3 `}>
                <h4 className="txtcolor-primary fw-bold w-50  ps-4">Latest Projects</h4>
                <hr className="primary-border border border-2 rounded w-25  " />
                <button className="p-3 icon-project-arrow border-0 ms-2" onClick={() => setEnlarge(!enlarge)}>
                  <img src="./icons/arrow-right.svg" />
                </button>
              </div>

              {/* Carousel */}
              <div id="carouselExampleInterval" className="carousel slide" data-bs-interval="false">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={datas[0].images[0]} className="d-block w-100 border border-2 p-2 primary-border " style={{ borderRadius: "44px" }} alt="..." />

                    <div className="detail-block ps-4">
                      <div className="text-block d-flex align-items-center mt-4 mb-2">
                        <h6 className="txtcolor-primary fw-bold   mb-0">{datas[0].name}</h6>
                        <button className="p-3 icon-project-arrow-sm border-0 ms-2">
                          <img src="./icons/arrow-right-sm.svg" />
                        </button>
                      </div>

                      <button className="btn-sm txtcolor-primary primary-border border-1 border rounded-pill bgcolor-secondary me-2">{datas[0].tech_stack[0]}</button>
                      <button className="btn-sm txtcolor-primary primary-border border-1 border rounded-pill bgcolor-secondary me-2">{datas[0].tech_stack[1]}</button>
                      <button className="btn-sm txtcolor-primary primary-border border-1 border rounded-pill bgcolor-secondary me-2">{datas[0].tech_stack[3]}</button>

                      <p className={`txtcolor-primary mt-3 ${enlarge ? "viewText thinScroll" : "textShrink"}`}>{datas[0].small_desc}</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={datas[1].images[0]} className="d-block w-100 border border-2 p-2 primary-border " style={{ borderRadius: "44px" }} alt="..." />
                    <div className="detail-block ps-4">
                      <div className="text-block d-flex align-items-center mt-4 mb-2">
                        <h6 className="txtcolor-primary fw-bold   mb-0">{datas[1].name}</h6>
                        <button className="p-3 icon-project-arrow-sm border-0 ms-2">
                          <img src="./icons/arrow-right-sm.svg" />
                        </button>
                      </div>

                      <button className="btn-sm txtcolor-primary primary-border border-1 border rounded-pill bgcolor-secondary me-2">{datas[1].tech_stack[0]}</button>
                      <button className="btn-sm txtcolor-primary primary-border border-1 border rounded-pill bgcolor-secondary me-2">{datas[1].tech_stack[1]}</button>
                      <button className="btn-sm txtcolor-primary primary-border border-1 border rounded-pill bgcolor-secondary me-2">{datas[1].tech_stack[3]}</button>

                      <p className={`txtcolor-primary mt-3 ${enlarge ? "viewText thinScroll" : "textShrink"}`}>{datas[1].small_desc}</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={datas[2].images[0]} className="d-block w-100 border border-2 p-2 primary-border " style={{ borderRadius: "44px" }} alt="..." />
                    <div className="detail-block ps-4">
                      <div className="text-block d-flex align-items-center mt-4 mb-2">
                        <h6 className="txtcolor-primary fw-bold   mb-0">{datas[2].name}</h6>
                        <button className="p-3 icon-project-arrow-sm border-0 ms-2">
                          <img src="./icons/arrow-right-sm.svg" />
                        </button>
                      </div>

                      <button className="btn-sm txtcolor-primary primary-border border-1 border rounded-pill bgcolor-secondary me-2">{datas[2].tech_stack[0]}</button>
                      <button className="btn-sm txtcolor-primary primary-border border-1 border rounded-pill bgcolor-secondary me-2">{datas[2].tech_stack[1]}</button>
                      <button className="btn-sm txtcolor-primary primary-border border-1 border rounded-pill bgcolor-secondary me-2">{datas[2].tech_stack[3]}</button>

                      <p className={`txtcolor-primary mt-3 ${enlarge ? "viewText thinScroll" : "textShrink"}`}>{datas[2].small_desc}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between controlbar">
                <div className="customIndicators ps-3 w-100">
                  <div className="progression-bar rounded-pill bgcolor-primary p-1 w-75 d-flex align-items-center">
                    {!isPlay ? (
                      <button className="btn bg-none border-0 txtcolor-secondary btn-lg btn-play" onClick={() => setIsPlay(!isPlay)}>
                        <i className="fa fa-play " />
                      </button>
                    ) : (
                      <button className="btn bg-none border-0 txtcolor-secondary btn-lg btn-play" onClick={() => setIsPlay(!isPlay)}>
                        <i className="fa fa-pause " />
                      </button>
                    )}

                    <div
                      className={`progress-dot ${slideNumber == 1 ? "active" : ""}${slideNumber == 2 ? "reset" : ""} ${!isPlay ? "pause" : ""} me-1`}
                      onClick={() => {
                        setSlideNumber(1);
                        setClickedDots(true);
                      }}
                    ></div>
                    <div
                      className={`progress-dot ${slideNumber == 2 ? "active" : ""}${slideNumber - 1 == 2 ? "reset" : ""} ${!isPlay ? "pause" : ""} me-1`}
                      onClick={() => {
                        setSlideNumber(2);
                        setClickedDots(true);
                      }}
                    ></div>
                    <div
                      className={`progress-dot ${slideNumber == 3 ? "active" : ""}${slideNumber == 1 ? "reset" : ""} ${!isPlay ? "pause" : ""} me-1`}
                      onClick={() => {
                        setSlideNumber(3);
                        setClickedDots(true);
                      }}
                    ></div>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <button
                    className="p-3 carousel-buttons prev border-0 "
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev"
                    onClick={() => setSlideNumber(slideNumber - 1 !== 0 ? slideNumber - 1 : 3)}
                  >
                    <img src="/icons/chevron-right.svg" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="p-3 carousel-buttons next border-0 ms-2 "
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next"
                    onClick={() => setSlideNumber(slideNumber + 1 !== 4 ? slideNumber + 1 : 1)}
                  >
                    <img src="/icons/chevron-right.svg" />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="carousel-right ps-4 h-100">
              <h2
                className={`fw-bold list-slider txtcolor-primary display-6 text-uppercase ${activeTab !== 0 ? "opacity-50" : ""}`}
                data-bs-target="#carouselExampleInterval"
                data-bs-slide-to="0"
                onClick={() => {
                  setSlideNumber(1);
                  setActiveTab(0);
                }}
              >
                • {datas[0].name}
              </h2>
              <div className={`border-start border-2 primary-border ${activeTab == 0 ? "mh-auto" : "mh-0"} `}></div>
              <h2
                className={`fw-bold list-slider txtcolor-primary display-6 text-uppercase ${activeTab !== 1 ? "opacity-50" : ""}`}
                data-bs-target="#carouselExampleInterval"
                data-bs-slide-to="1"
                onClick={() => {
                  setSlideNumber(2);
                  setActiveTab(1);
                }}
              >
                • {datas[1].name}
              </h2>
              <div className={`border-start border-2 primary-border ${activeTab == 1 ? "mh-auto" : "mh-0"} ${activeTab == 1 - 1 ? "mh-auto-off" : ""}`}></div>
              <h2
                className={`fw-bold list-slider txtcolor-primary display-6 text-uppercase ${activeTab !== 2 ? "opacity-50" : ""}`}
                data-bs-target="#carouselExampleInterval"
                data-bs-slide-to="2"
                onClick={() => {
                  setSlideNumber(3);
                  setActiveTab(2);
                }}
              >
                • {datas[2].name}
              </h2>
              <div className={`border-start border-2 primary-border ${activeTab == 2 ? "mh-auto" : "mh-0"}  ${activeTab == 2 - 1 ? "mh-auto-off" : ""}`}></div>
            </div>
          </div>
        </div>
      )}

      {mobile && (
        <div className={`mobile box-projects  py-4 px-3`}>
          <div className="d-flex h-100">
            <div className="carousel-left position-relative">
              <div className={`text-head d-flex align-items-center justify-content-between my-3 `}>
                <h4 className="txtcolor-primary fw-bold w-50  ps-4">Latest Projects</h4>
                <hr className="primary-border border border-2 rounded w-25  " />
                <button className="p-3 icon-project-arrow border-0 ms-2">
                  <img src="./icons/arrow-right.svg" />
                </button>
              </div>

              {/* Carousel */}
              <div id="carouselExampleInterval" className="carousel slide" data-bs-interval="false">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={datas[0].images[0]} className="d-block w-100 border border-2 p-2 primary-border " style={{ borderRadius: "44px" }} alt="..." />

                    <div className="detail-block ps-4">
                      <div className="text-block d-flex align-items-center mt-4 mb-2">
                        <h6 className="txtcolor-primary fw-bold   mb-0">{datas[0].name}</h6>
                        <button className="p-3 icon-project-arrow-sm border-0 ms-2">
                          <img src="./icons/arrow-right-sm.svg" />
                        </button>
                      </div>

                      <button className="btn-sm txtcolor-primary primary-border border-1 border rounded-pill bgcolor-secondary me-2">{datas[0].tech_stack[0]}</button>
                      <button className="btn-sm txtcolor-primary primary-border border-1 border rounded-pill bgcolor-secondary me-2">{datas[0].tech_stack[1]}</button>
                      <button className="btn-sm txtcolor-primary primary-border border-1 border rounded-pill bgcolor-secondary me-2">{datas[0].tech_stack[3]}</button>

                      <p className={`txtcolor-primary mt-3 ${enlarge ? "viewText thinScroll" : "textShrink"}`}>{datas[0].small_desc}</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={datas[1].images[0]} className="d-block w-100 border border-2 p-2 primary-border " style={{ borderRadius: "44px" }} alt="..." />
                    <div className="detail-block ps-4">
                      <div className="text-block d-flex align-items-center mt-4 mb-2">
                        <h6 className="txtcolor-primary fw-bold   mb-0">{datas[2].name}</h6>
                        <button className="p-3 icon-project-arrow-sm border-0 ms-2">
                          <img src="./icons/arrow-right-sm.svg" />
                        </button>
                      </div>

                      <button className="btn-sm txtcolor-primary primary-border border-1 border rounded-pill bgcolor-secondary me-2">{datas[1].tech_stack[0]}</button>
                      <button className="btn-sm txtcolor-primary primary-border border-1 border rounded-pill bgcolor-secondary me-2">{datas[1].tech_stack[1]}</button>
                      <button className="btn-sm txtcolor-primary primary-border border-1 border rounded-pill bgcolor-secondary me-2">{datas[1].tech_stack[3]}</button>

                      <p className={`txtcolor-primary mt-3 ${enlarge ? "viewText thinScroll" : "textShrink"}`}>{datas[1].small_desc}</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={datas[2].images[0]} className="d-block w-100 border border-2 p-2 primary-border " style={{ borderRadius: "44px" }} alt="..." />
                    <div className="detail-block ps-4">
                      <div className="text-block d-flex align-items-center mt-4 mb-2">
                        <h6 className="txtcolor-primary fw-bold   mb-0">{datas[2].name}</h6>
                        <button className="p-3 icon-project-arrow-sm border-0 ms-2">
                          <img src="./icons/arrow-right-sm.svg" />
                        </button>
                      </div>

                      <button className="btn-sm txtcolor-primary primary-border border-1 border rounded-pill bgcolor-secondary me-2">{datas[2].tech_stack[0]}</button>
                      <button className="btn-sm txtcolor-primary primary-border border-1 border rounded-pill bgcolor-secondary me-2">{datas[2].tech_stack[1]}</button>
                      <button className="btn-sm txtcolor-primary primary-border border-1 border rounded-pill bgcolor-secondary me-2">{datas[2].tech_stack[3]}</button>

                      <p className={`txtcolor-primary mt-3 ${enlarge ? "viewText thinScroll" : "textShrink"}`}>{datas[2].small_desc}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between controlbar2">
                <div className="customIndicators ps-3 w-100">
                  <div className="progression-bar rounded-pill bgcolor-primary p-1 w-50 d-flex align-items-center">
                    {!isPlay ? (
                      <button className="btn bg-none border-0 txtcolor-secondary btn-lg btn-play" onClick={() => setIsPlay(!isPlay)}>
                        <i className="fa fa-play " />
                      </button>
                    ) : (
                      <button className="btn bg-none border-0 txtcolor-secondary btn-lg btn-play" onClick={() => setIsPlay(!isPlay)}>
                        <i className="fa fa-pause " />
                      </button>
                    )}

                    <div
                      className={`progress-dot ${slideNumber == 1 ? "active" : ""}${slideNumber == 2 ? "reset" : ""} ${!isPlay ? "pause" : ""} me-1`}
                      onClick={() => {
                        setSlideNumber(1);
                        setClickedDots(true);
                      }}
                    ></div>
                    <div
                      className={`progress-dot ${slideNumber == 2 ? "active" : ""}${slideNumber - 1 == 2 ? "reset" : ""} ${!isPlay ? "pause" : ""} me-1`}
                      onClick={() => {
                        setSlideNumber(2);
                        setClickedDots(true);
                      }}
                    ></div>
                    <div
                      className={`progress-dot ${slideNumber == 3 ? "active" : ""}${slideNumber == 1 ? "reset" : ""} ${!isPlay ? "pause" : ""} me-1`}
                      onClick={() => {
                        setSlideNumber(3);
                        setClickedDots(true);
                      }}
                    ></div>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <button
                    className="p-3 carousel-buttons prev border-0 "
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev"
                    onClick={() => setSlideNumber(slideNumber - 1 !== 0 ? slideNumber - 1 : 3)}
                  >
                    <img src="/icons/chevron-right.svg" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="p-3 carousel-buttons next border-0 ms-2 "
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next"
                    onClick={() => setSlideNumber(slideNumber + 1 !== 4 ? slideNumber + 1 : 1)}
                  >
                    <img src="/icons/chevron-right.svg" />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
