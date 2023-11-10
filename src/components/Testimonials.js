import React from 'react'
import '../assets/scss/testimonials.scss'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { MdOutlineStar, MdOutlineStarOutline } from "react-icons/md";

const Testimonials = () => {
  return (
    <div className='testimonials max-w-screen-xl mx-auto flex items-center space-x-20 py-10'>
        <div className="left">
            <div className="avatar bg-gray-400"></div>
        </div>
        <div className="right">
            <div className="title">
                <h2>Reviews</h2>
                <span>Reviews</span>
            </div>
            <p className="subtitle">Lorem ipsum dolor sit amet.</p>
            <div className="content">
                <p className="message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus cumque quas hic voluptates consectetur nostrum perferendis assumenda odio sit tempora.</p>
                <div className="user flex items-center">
                    <span className="username">John Doe</span>
                    <div className="stars flex">
                        <MdOutlineStar/>
                        <MdOutlineStar/>
                        <MdOutlineStar/>
                        <MdOutlineStar/>
                        <MdOutlineStarOutline/>
                    </div>
                </div>
            </div>
            <div className="arrows flex items-center space-x-5">
                <button><AiOutlineArrowLeft/></button>
                <span>|</span>
                <button><AiOutlineArrowRight/></button>
            </div>
        </div>
    </div>
  )
}

export default Testimonials