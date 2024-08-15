import React from "react";
import Calendar from "./emailjs/calendar";

const TopBar = () => {
  return (
    <>
      <div className="tbar bgcolor-secondary shadow rounded-pill txtcolor-plain py-2 px-4" style={{ position: "fixed", left: "50%", transform: "translateX(-50%)" }}>
        <p className="py-0 lead my-0 fw-bold">Hi There! 👋</p>
      </div>

      <div className="tbar bgcolor-secondary shadow rounded-pill txtcolor-plain py-2 px-4" style={{ position: "fixed", left: "50%", transform: "translateX(-50%)" }}>
        <p className="py-0 lead my-0 fw-bold">Hope you are doing well! 🕊️</p>
      </div>

      <div className="tbar bgcolor-secondary shadow rounded-pill txtcolor-plain py-2 px-4" style={{ position: "fixed", left: "50%", transform: "translateX(-50%)" }}>
        <p className="py-0 lead my-0 fw-bold">Grab your beverage ☕</p>
      </div>
      <div className="tbar bgcolor-secondary shadow rounded-pill txtcolor-plain py-2 px-4" style={{ position: "fixed", left: "50%", transform: "translateX(-50%)" }}>
        <p className="py-0 lead my-0 fw-bold">Have a nice Day 😄</p>
      </div>

      <div className="tbar " style={{ position: "fixed", left: "50%", transform: "translateX(-50%)" }}>
        <Calendar />
      </div>
    </>
  );
};

export default TopBar;
