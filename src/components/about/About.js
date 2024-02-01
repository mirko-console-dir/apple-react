import Navbar from "../navbars/Navbar";
const About = () => {
  console.log("About");
  return (
    <>
      <section id="section-1" className="section-1">
        <Navbar />
      {/* Banner */}
      <div className="section-1-banner center">
        <h1>React Apple Products</h1>
        <p>Welcome to the React Apple Products Showcase! This project is a visually appealing web application built with React, featuring stunning animations and captivating design to showcase various Apple products with animation and library for DOM elements jest-dom.</p>
      </div>
      {/* End of Banner */}
      {/*  Slideshow */}
      <div className="slideshow">
        {/* CREATE slides */}
        {[...Array(5)].map((el, index) => (
          <div
            className={index === 0 ? "change" : " "}
            style={{
              backgroundImage: `url(images/slideshow/section-1-bg-${index}.jpg)`,
            }}
            key={index}
          ></div>
        ))}
        {/*  const slideshowDivs = () => {
      for (let i = 1; i <= 5; i++) {
        const div = document.createElement("div");

        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;

        i === 1 && div.classList.add("change");

        document.querySelector(".slideshow").appendChild(div);
      }
    };
    slideshowDivs(); */}
      </div>
      {/*  End of Slideshow  */}
      </section>
    </>
  );
};

export default About;
