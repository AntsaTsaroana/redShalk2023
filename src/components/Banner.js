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
        <h1>DANS LA CREATION ARTISTIQUE</h1>
        <h1>IL N'Y A PAS D'ERREUR</h1>
        <p>Antsa créations offre des modèles unique et sur mesure pour definir chaque personalité.</p>
        <button>NOS SERVICES</button>
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
