import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useRef, useEffect } from 'react';
import { panier, logoDark } from "../assets/index";
import "../assets/scss/navigation.scss";


const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  // const userInfo = useSelector((state) => state.bazar.userInfo);

  const toggleNav = useRef(null);
  const navMobile = useRef(null);

  useEffect(() => {
    
    const toggle = toggleNav.current;
    const navigation = navMobile.current;

    toggle.addEventListener('click', () => {
      navigation.classList.toggle("active");
    })

  
  }, [])

  return (
    <>
      <div className="navigation w-full h-20 bg-white font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50">
        <div className="max-w-screen-xl h-full flex items-center justify-between ml-auto mr-auto">
          <Link to="/">
            <div>
              <img className="w-28" src={logoDark} alt="logoDark" />
            </div>
          </Link>
          <div className="flex items-center gap-8">
            <ul className="navigation-item flex item-center gap-8">
              <Link to="/">
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Accueil
                </li>
              </Link>
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Pages
              </li>
              <Link to ="/advices">
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Conseil
                </li>
              </Link>
              <Link to='/aboutMe'>
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  A propos
                </li>
              </Link>
              <Link to="/commande">
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Commander
                </li>
              </Link>
            </ul>
            <Link to="/cart">
              <div className="relative">
                <img className="w-8" src={panier} alt="panier" />
                <span className="notif">
                  {productData.length}
                </span>
              </div>
            </Link>

            {/* burger Menu */}
            <span ref={toggleNav} className="toggle-nav">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke="#000" strokeWidth=".6" fill="rgba(0,0,0,0)" strokeLinecap="round" style={{ cursor: 'pointer' }}>
                <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
                  <animate dur="0.2s" attributeName="d" values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7" fill="freeze" begin="start.begin" />
                  <animate dur="0.2s" attributeName="d" values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7" fill="freeze" begin="reverse.begin" />
                </path>
                <rect width="10" height="10" stroke="none">
                  <animate dur="2s" id="reverse" attributeName="width" begin="click" />
                </rect>
                <rect width="10" height="10" stroke="none">
                  <animate dur="0.001s" id="start" attributeName="width" values="10;0" fill="freeze" begin="click" />
                  <animate dur="0.001s" attributeName="width" values="0;10" fill="freeze" begin="reverse.begin" />
                </rect>
              </svg>
            </span>

            {/* Nav Mobile */}
            <div ref={navMobile} className="nav-mobile">
              <span className="hideElement">
                <a href="#header" className="active" style={{ '--i': '0.5s' }}>Accueil</a>
              </span>
              <span className="hideElement">
                <a href="#problems" className="active" style={{ '--i': '0.6s' }}>lorem</a>
              </span>
              <span className="hideElement">
                <a href="#solutions" className="active" style={{ '--i': '0.6s' }}>lorem</a>
              </span>
              <span className="hideElement">
                <a href="#partenaires" className="active" style={{ '--i': '0.7s' }}>lorem</a>
              </span>
            </div>

            {/* <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src={
                userInfo
                  ? userInfo.image
                  : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="userLogo"
            />
          </Link>

          {userInfo && (
            <p className="text-base font-titleFont font-semibold underline underline-offset-2">
              {userInfo.name}
            </p>
          )} */}
          </div>
        </div>
      </div>
    </>

  );
};

export default Header;
