import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { logoLight, paymentLogo } from "../assets";
import '../assets/scss/footer.scss';

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="footer max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="logo-content flex flex-col gap-7">
          <img className="w-32" style={{filter:'invert(1)'}} src={logoLight} alt="logoLight" />
          <p className="text-white text-sm tracking-wide">© Retina Madagascar</p>
          <img className="w-56" src={paymentLogo} alt="paymentLogo" />
          <div className="flex gap-5 text-lg text-gray-400">
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div className="location">
          <h2 className="text-2xl font-semibold text-white mb-4">locate us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Tana, Ambohidroa</p>
            <p>Mobile: +261 34 45 883 12</p>
            <p>Phone: +261 32 18 344 51</p>
            <p>e-mail: <a href="mailto:sarobidyantsatina@gmail.com">sarobidyantsatina@gmail.com</a></p>
          </div>
        </div>
        <div className="location" style={{marginBottom: '25px'}}>
          <h2 className="location text-2xl font-semibold text-white mb-4">profile</h2>
          <div className="text-base flex flex-col gap-2">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPersonFill />
              </span>
              my account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPaypal />
              </span>
              checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <FaHome />
              </span>
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <MdLocationOn />
              </span>
              help & support
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            type="text"
            placeholder="e-mail"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
