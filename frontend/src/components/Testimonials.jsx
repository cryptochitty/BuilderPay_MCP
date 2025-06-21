import "/src/styles/Testimonials.css";
import React from "react";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <p className="testimonials__content">
        "BuilderPay made it incredibly easy to support developers doing
        meaningful work. I loved how transparent and direct the process was.
        Every donation felt personal and impactful. Highly recommended!"
      </p>
      <div className="testimonials__author">
        <img
          src="/src/assets/Avatar Image.png"
          alt="Author"
          className="testimonials__author-img"
        />
        <div className="testimonials__author-info">
          <h3 className="testimonials__author-name">Jane Doe</h3>
          <p className="testimonials__author-role">Crypto Enthusiast</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
