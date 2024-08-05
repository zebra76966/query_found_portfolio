import React from "react";
import { motion } from "framer-motion";
const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const Card = ({ data }) => {
  return (
    <div className="custom-card" style={{ backgroundImage: `url('${data.images[0]}')`, backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
      <div className="card-text">
        <button className="btn bgcolor-primary txtcolor-secondary position-absolute top-0 end-0 mt-4 me-4 rounded-pill">Latest</button>
        <div className="w-100 position-absolute bottom-0 start-0 ms-4 mb-4">
          <h3 className=" display-4 fw-bold mb-2 text-light"> {data.name}</h3>
          {data.tech_stack.slice(0, 4).map((ini, i) => {
            return <button className="btn btn-outline-light me-2 rounded-pill border border-1">{ini}</button>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
