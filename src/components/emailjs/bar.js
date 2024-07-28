import React from "react";

const Bar = ({ mobile }) => {
  return (
    <form>
      {!mobile && (
        <div class="mb-3 position-relative">
          <input type="text" class="form-control rounded-pill txtcolor-primary p-3 bar" id="message" aria-describedby="message" placeholder=" Get a Quote or Just say Hi!..." />

          <button className="p-3 icon-attach border-0">
            <img src="./icons/attach.svg" />
          </button>
          <button className="p-3 icon-send border-0">
            <img src="./icons/send.svg" />
          </button>
        </div>
      )}

      {mobile && (
        <div className="mobilebar">
          <div class="mb-3   position-relative">
            <input type="text" class="form-control rounded-pill txtcolor-primary p-3 bar" id="message" aria-describedby="message" placeholder=" Get a Quote or Just say Hi!..." />

            <button className="p-3 icon-attach border-0">
              <img src="./icons/attach.svg" />
            </button>
            <button className="p-3 icon-send border-0">
              <img src="./icons/send.svg" />
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default Bar;
