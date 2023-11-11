import { React, useEffect, useRef } from "react";
import { gsap } from "gsap";
import antsaImg from "../assets/img/antsaImg.webp"
import '../assets/scss/banner.scss';

const Banner = () => {
  // REFERENCE
  const container = useRef();

  useEffect(() => {
    const tl = gsap.timeline({});

    }, [])


    return (
      <div className="banner" ref={container}>
        <div className="text">
          <h1>STYLE IS A CHOICE.</h1>
          <h1>MAKE YOURS.</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur neque fugit accusamus numquam aut ullam facere illum Consectetur neque fugit accus.</p>
          <button>OUR SERVICE</button>
        </div>
        <div className="imgBanner">
          <div className="img">
            <div className="circle"></div>
            <img src={antsaImg} alt="imgAntsa" />
          </div>
        </div>
      </div>
    );
  };

  export default Banner;
