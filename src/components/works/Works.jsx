import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "CRUD App",
      desc:
        "bookList - a CRUD application built with Express.js and MongoDB. ",
      img:
        "./assets/crudApp.png",
      link: "https://alexmcintire.herokuapp.com/"
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Benjamin Moore API Refactor",
      desc:
        "Refactored API for Benjamin Moore Paints; improved lookup time from O(n) to O(1).",
      img:
        "./assets/apiRefactor.jpg",
      link: "https://github.com/alexisabadger/refactorAPI-improveTimeComplexity"
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Resume",
      desc:
        "Find Alex on LinkedIn.",
      img:
        "./assets/alexLinkedin.png",
      link: "https://www.linkedin.com/in/alex-mcintire-7083b3211/"
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.link}>Link</a>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}