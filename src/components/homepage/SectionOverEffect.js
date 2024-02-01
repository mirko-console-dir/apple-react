/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const SectionOverEffect = () => {
  return (
    <>
      {/* Section 2 Heading */}
      <h1 className="section-2-heading">iPhone 12</h1>
      {/* End of Section 2 Heading */}
      {/* Section 2 Images */}
      <div className="iphones">
        <img src="images/iPhones/iphones-1-img.png" className="iphone-img-1" alt=""/>
        <img src="images/iPhones/iphones-2-img.png" className="iphone-img-2" alt=""/>
      </div>
      {/* End of Section 2 Images */}
      {/* Section 2 Buttons */}
      <div className="iphone-btns">
        <a href="#" className="iphone-btn center">
          <span>Learn More</span>
        </a>
        <a href="#" className="iphone-btn center">
          <span>Shop</span>
        </a>
      </div>
      {/* End of Section 2 Buttons */}
    </>
  );
};
export default SectionOverEffect;
