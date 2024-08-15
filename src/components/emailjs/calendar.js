import React, { useState } from "react";
import { InlineWidget } from "react-calendly";

const Calendar = () => {
  const [calendar, setCalendar] = useState(false);

  return (
    <div className="text-center">
      <button
        className={`btn btn-lg bgcolor-secondary txtcolor-plain fw-bold ${!calendar ? "rounded-pill" : "rounded-circle"} shadow-lg fs-5`}
        onClick={() => {
          setCalendar(!calendar);
        }}
      >
        {!calendar ? (
          <>
            Book a Meeting <i className="fa fa-calendar border-start border-2 ps-3 ms-1 "></i>
          </>
        ) : (
          <i className="fa fa-times fs-3"></i>
        )}
      </button>
      {calendar && (
        <div className="w-100 text-center mt-1">
          <InlineWidget url="https://calendly.com/zebcorp76" />
        </div>
      )}
      {/* <PopupWidget url="https://calendly.com/zebcorp76" rootElement={document.getElementById("root")} text="Schedule a meeting" textColor="#ffffff" color="#00a2ff" /> */}
    </div>
  );
};

export default Calendar;
