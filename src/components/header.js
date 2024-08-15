import React, { useState, useEffect } from "react";

const Header = ({ mobile, setFolio, setCurentProj, folio, setAllServices, allServices, activeProj, setAbout, about }) => {
  const [active, setActive] = useState("home");
  const [mobileActive, setMobileAactive] = useState(false);

  useEffect(() => {
    if (window.location.pathname.includes("/projects")) {
      setFolio(true);
      setActive("assets");
    } else if (window.location.pathname.includes("/products")) {
      setAllServices(true);

      setActive("service");
    } else if (window.location.pathname.includes("/about")) {
      setAbout(true);
      setActive("about");
    } else {
      setAllServices(false);
      setFolio(false);
      setAbout(false);
      setActive("home");
    }
  }, []);

  useEffect(() => {
    if (folio && !allServices && !about) {
      setActive("assets");
    } else if (folio && allServices && about) {
      setActive("about");
    } else if (folio && allServices && !about) {
      setActive("service");
    } else if (!folio && allServices && !about) {
      setActive("service");
    } else if (!folio && !allServices && about) {
      setActive("about");
    } else if (!folio && allServices && about) {
      setActive("about");
    } else if (folio && !allServices && about) {
      setActive("about");
    } else {
      setActive("home");
    }
  }, [folio, allServices, about]);

  return (
    <>
      {console.log(active)}
      {console.log("allser:" + allServices)}
      {console.log("folio:" + folio)}
      {console.log("about:" + about)}
      {!mobile && (
        <div class={`sidenav ${active == "home" ? "hnav1" : active == "assets" ? "hnav2" : active == "service" ? "hnav3" : "hnav4"} d-flex flex-column rounded-pill p-2 px-3`}>
          <div class="flex-column mb-auto pt-2 ">
            <a
              className="mx-auto mb-4 rounded-circle bgcolor-secodary d-flex align-items-center justify-content-center"
              style={{ height: "70px", width: "70px" }}
              onClick={() => {
                setActive("home");
                setFolio(false);
                setAllServices(false);
                setAbout(false);
                setCurentProj(0);
                window.history.pushState(null, null, "/");
              }}
            >
              <img src="./logo.png" className="rounded-circle border-0 bgcolor-secondary" style={{ height: "70px", width: "70px", objectFit: "cover" }} />
            </a>
            <hr className="border border-light " />
            <a
              className="mx-auto mt-4 mb-4 rounded-circle bgcolor-primary d-flex align-items-center justify-content-center"
              style={{ height: "70px", width: "70px" }}
              onClick={() => {
                setActive("home");
                setFolio(false);
                setAllServices(false);
                setAbout(false);
                setCurentProj(0);
                window.history.pushState(null, null, "/");
              }}
            >
              <img src="./icons/home_a.svg" />
            </a>
            <a
              className={`mx-auto position-relative mt-4 mb-4 rounded-circle ${
                active == "assets" || active == "service" || active == "about" ? "bgcolor-primary" : "bgcolor-secondary"
              } d-flex align-items-center justify-content-center`}
              style={{ height: "70px", width: "70px" }}
              onClick={() => {
                setActive("assets");
                setFolio(true);
                setAllServices(false);
                setAbout(false);
                setCurentProj(0);
                window.history.pushState(null, null, "/projects");
              }}
            >
              {active == "assets" || active == "service" || active == "about" ? (
                <img src="./icons/puzzle_a.svg" className="ms-1" />
              ) : (
                <>
                  <img src="./icons/puzzle_b.svg" className="ms-1" />
                  <p
                    className="bgcolor-secondary txtcolor-primary rounded-pill text-center py-1 "
                    style={{ paddingLeft: "0.7em", paddingRight: "0.7em", position: "absolute", top: "50%", right: "-90px", transform: "translateY(-50%)" }}
                  >
                    Projects
                  </p>
                </>
              )}
            </a>
            <a
              className={`mx-auto position-relative mt-4 mb-4 rounded-circle ${
                active == "service" || active == "about" ? "bgcolor-primary" : "bgcolor-secondary"
              } d-flex align-items-center justify-content-center`}
              style={{ height: "70px", width: "70px" }}
              onClick={() => {
                setActive("service");
                setFolio(false);
                setAllServices(true);
                setAbout(false);
                setCurentProj(0);
                window.history.pushState(null, null, "/products");
              }}
            >
              {active == "service" || active == "about" ? (
                <img src="./icons/doc_a.svg" className="ms-1" />
              ) : (
                <>
                  <img src="./icons/doc_b.svg" className="ms-1" />
                  {activeProj == 0 && (
                    <p
                      className="bgcolor-secondary txtcolor-primary rounded-pill text-center py-1 "
                      style={{ paddingLeft: "0.7em", paddingRight: "0.7em", position: "absolute", top: "50%", right: "-90px", transform: "translateY(-50%)" }}
                    >
                      Services
                    </p>
                  )}
                </>
              )}
            </a>
            <a
              className={`mx-auto position-relative mt-4 mb-4 rounded-circle ${active == "about" ? "bgcolor-primary" : "bgcolor-secondary"} d-flex align-items-center justify-content-center`}
              style={{ height: "70px", width: "70px" }}
              onClick={() => {
                setActive("about");
                setFolio(false);
                setAllServices(false);
                setAbout(true);

                setCurentProj(0);
                window.history.pushState(null, null, "/about");
              }}
            >
              {active == "about" ? (
                <img src="./icons/about_b.svg" className="ms-1" />
              ) : (
                <>
                  <img src="./icons/about_a.svg" className="ms-1" />
                  {active !== "about" && activeProj == 0 && (
                    <p
                      className="bgcolor-secondary txtcolor-primary rounded-pill text-center py-1 "
                      style={{ paddingLeft: "0.7em", paddingRight: "0.7em", position: "absolute", top: "50%", right: "-80px", transform: "translateY(-50%)" }}
                    >
                      About
                    </p>
                  )}
                </>
              )}
            </a>
          </div>

          {/* 
      <hr />
      <div class="dropdown mb-3">
        <a href="#" className="text-center ">
          <img src="./logo512.png" className="rounded-circle border-1 border border-warning" style={{ objectFit: "cover", height: "80px", width: "80px" }} />
        </a>
        <ul class="dropdown-menu dropdown-menu-dark bg-secondary shadow" aria-labelledby="dropdownUser1">
          <li>
            <a class="dropdown-item fs-5" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div> */}
        </div>
      )}
      {mobile && (
        // <div
        //   class={`mobileSidenav ${mobileActive ? "active" : "inactive"}  ${
        //     active == "home" || !mobileActive ? "hnav1" : active == "assets" && mobileActive ? "hnav2" : "hnav3"
        //   } d-flex flex-column rounded-pill p-2 px-3`}
        // >
        //   <div class="flex-column mb-auto pt-2 ">
        //     <a
        //       href="#"
        //       className="mx-auto mb-4 rounded-circle bgcolor-primary d-flex align-items-center justify-content-center"
        //       style={{ height: "70px", width: "70px" }}
        //       onClick={() => {
        //         // setActive("home");
        //         setMobileAactive(!mobileActive);
        //       }}
        //     >
        //       <img src="./logo.png" className="rounded-circle" style={{ height: "70px", width: "70px", objectFit: "cover" }} />
        //     </a>
        //     {mobileActive && <hr className="border border-light " />}

        //     <a
        //       href="#"
        //       className="mx-auto mt-4 mb-4 rounded-circle bgcolor-primary d-flex align-items-center justify-content-center"
        //       style={{ height: "70px", width: "70px" }}
        //       onClick={() => {
        //         setActive("home");
        //         setFolio(false);
        //         setMobileAactive(false);
        //       }}
        //     >
        //       <img src="./icons/home_a.svg" />
        //     </a>

        //     <a
        //       href="#"
        //       className={`mx-auto mt-4 mb-4 rounded-circle ${active == "assets" ? "bgcolor-primary" : "bgcolor-secondary"} d-flex align-items-center justify-content-center`}
        //       style={{ height: "70px", width: "70px" }}
        //       onClick={() => {
        //         setActive("assets");
        //         setFolio(true);
        //         setCurentProj(0);
        //         setMobileAactive(false);
        //       }}
        //     >
        //       {active == "assets" || active == "service" ? <img src="./icons/puzzle_a.svg" className="ms-1" /> : <img src="./icons/puzzle_b.svg" className="ms-1" />}
        //     </a>
        //     <a
        //       href="#"
        //       className={`mx-auto mt-4 mb-4 rounded-circle ${active == "service" ? "bgcolor-primary" : "bgcolor-secondary"} d-flex align-items-center justify-content-center`}
        //       style={{ height: "70px", width: "70px" }}
        //       onClick={() => {
        //         setActive("service");
        //         setFolio(false);
        //         setMobileAactive(false);
        //       }}
        //     >
        //       {active == "service" ? <img src="./icons/doc_a.svg" className="ms-1" /> : <img src="./icons/doc_b.svg" className="ms-1" />}
        //     </a>
        //   </div>
        // </div>
        // New Header Start=============>

        <div class={`mobileSidenav2  active ${active == "home" ? "hnav1" : active == "assets" ? "hnav2" : "hnav3"} d-flex flex-column rounded-pill p-2 px-3`}>
          <div class="d-flex mb-auto pt-2 ">
            <div className="w-100 text-center pb-2">
              <a
                className="mx-auto mt-2 rounded-circle bgcolor-primary d-flex align-items-center justify-content-center"
                style={{ height: "70px", width: "70px" }}
                onClick={() => {
                  setActive("home");
                  setFolio(false);
                  setMobileAactive(false);
                  setCurentProj(0);
                  setAllServices(false);
                  window.history.pushState(null, null, "/");
                }}
              >
                <img src="./icons/home_a.svg" />
              </a>
              <span className="txtcolor-primary fw-bold ">HOME</span>
            </div>
            <div className="w-100 text-center pb-2">
              <a
                className={`mx-auto mt-2  rounded-circle ${active == "assets" || active == "service" ? "bgcolor-primary" : "bgcolor-secondary"} d-flex align-items-center justify-content-center`}
                style={{ height: "70px", width: "70px" }}
                onClick={() => {
                  setActive("assets");
                  setFolio(true);
                  setCurentProj(0);
                  setMobileAactive(false);
                  setAllServices(false);
                  window.history.pushState(null, null, "/projects");
                }}
              >
                {active == "assets" || active == "service" ? <img src="./icons/puzzle_a.svg" className="ms-1" /> : <img src="./icons/puzzle_b.svg" className="ms-1" />}
              </a>
              <span className={`${active == "assets" || active == "service" ? "txtcolor-primary" : "txt-secondary"} fw-bold`}>PROJECTS</span>
            </div>
            <div className="w-100 text-center pb-2">
              <a
                className={`mx-auto  mt-2 rounded-circle ${active == "service" ? "bgcolor-primary" : "bgcolor-secondary"} d-flex align-items-center justify-content-center`}
                style={{ height: "70px", width: "70px" }}
                onClick={() => {
                  setActive("service");
                  setFolio(false);
                  setMobileAactive(false);
                  setAllServices(true);
                  setCurentProj(0);
                  window.history.pushState(null, null, "/products");
                }}
              >
                {active == "service" ? <img src="./icons/doc_a.svg" className="ms-1" /> : <img src="./icons/doc_b.svg" className="ms-1" />}
              </a>
              <span className={`${active == "assets" || active == "service" ? "txtcolor-primary" : "txt-secondary"} fw-bold`}>SERVICES</span>
            </div>
          </div>
        </div>
      )}
      {mobile && mobileActive && <div className="bg-blur "></div>}
    </>
  );
};

export default Header;
