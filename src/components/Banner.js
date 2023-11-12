import { React, useEffect, useRef } from "react";
import { gsap } from "gsap";
import antsaImg from "../assets/img/antsaImg.webp"
import '../assets/scss/banner.scss';

const Banner = () => {
  // REFERENCE
  const container = useRef();

  useEffect(() => {
    const tl = gsap.timeline({});

    tl.from('.circle', 1.2, {
      y: 900,
      ease: "power4.out",
      delay: 0.5,
    })
      .from('.antsa', 1.5, {
        y: 900,
        ease: "power4.out"
      }, "-=1")
      .from('.headerTitle', 1.2, {
        y: 150,
        ease: "power4.out",
        delay: 0.5,
        skewY: 7,
        stagger: 0.3
      }, "-=1")
      .from('.paragraphe', 1.2, {
        y: 150,
        ease: "power4.out",
        delay: 0.5,
        skewY: 7,
      }, "-=1")
      .to('.btnBanner', 1, {
        y:0,
        autoAlpha: 1,
        ease: "ease"
      }, "-=1")

  }, [])
  return (
    <div className="banner" ref={container}>
      <div className="text">
        <span className="hidden">
          <h1 className="headerTitle">DANS LA CREATION</h1>
        </span>
        <span className="hidden">
          <h1 className="headerTitle">ARTISTIQUE</h1>
        </span>
        <span className="hidden">
          <h1 className="headerTitle">IL N'Y A PAS D'ERREUR</h1>
        </span>
        <span className="hidden">
          <p className="paragraphe">Antsa créations propose des modèles uniques faits sur mesure pour exprimer la personnalité de chaque individu. Chaque pièce est pensée comme une création exclusive pour sublimer celui ou celle qui la porte.</p>
        </span>

        <span className="hidden">
          <button className="btnBanner" style={{opacity:'0'}}>NOS SERVICES</button>
        </span>
      </div>
      <div className="imgBanner">
        <div className="img">
          <div className="circle"></div>
          <img src={antsaImg} alt="imgAntsa" className="antsa" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
