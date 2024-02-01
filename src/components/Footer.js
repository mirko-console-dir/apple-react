import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="center">
          <a href="#section-1" className="icon-link">
            <img src="images/Icons/home-icon.png" alt=""/>
          </a>
          <a href="#section-2" className="icon-link">
            <img src="images/Icons/iphone-icon.png" alt="" />
          </a>
          <a href="#section-3" className="icon-link">
            <img src="images/Icons/macbook-icon.png" alt="" />
          </a>
          <a href="#section-4" className="icon-link">
            <img src="images/Icons/watch-icon.png" alt="" />
          </a>
          <a href="#section-5" className="icon-link">
            <img src="images/Icons/airpods-icon.png" alt="" />
          </a>
        </div>

        <p className="copyright">
          Copyright © CodeAndCreate All Rights Reserved
        </p>
      </footer>
    </>
  );
};
export default Footer;
