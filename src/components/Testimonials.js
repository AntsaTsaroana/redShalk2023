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
                <h2>Témoignages</h2>
                <span>Témoignages</span>
            </div>
            <p className="subtitle">Leurs mots comptent pour nous.</p>
            <div className="content">
                <p className="message">Je suis tombé amoureux de chaque pièce créée par le styliste. Les vêtements sont uniques, confortables et reflètent parfaitement mon style. Une expérience inoubliable!</p>
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