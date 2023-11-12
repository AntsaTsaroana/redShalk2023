import React from 'react'
import { useState } from 'react';
import '../assets/scss/testimonials.scss'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { MdOutlineStar, MdOutlineStarOutline } from "react-icons/md";
import Avatar1 from "../assets/img/avatar1.png"
import Avatar2 from "../assets/img/avatar2.jpg"
import Avatar3 from "../assets/img/avatar3.jpg"
import testimonials from "../data/testimonials.json"

const Testimonials = () => {

    const [userId, setUserId] = useState(1)

  return (
    <div className='testimonials max-w-screen-xl mx-auto flex items-center space-x-20 py-10'>
        <div className="left">
            <div className="avatar bg-gray-400" style={{
                backgroundImage: userId === 1 ? `url(${Avatar1})` : userId === 2 ? `url(${Avatar2})` : `url(${Avatar3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}></div>
        </div>
        <div className="right">
            <div className="title">
                <h2>Témoignages</h2>
                <span>Témoignages</span>
            </div>
            <p className="subtitle">Leurs mots comptent pour nous.</p>
            <div className="content">
                <p className="message">
                    {
                        testimonials[userId - 1].testimonial
                    }
                </p>
                <div className="user flex items-center">
                    <span className="username">{testimonials[userId - 1].username}</span>
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
                <button className={userId === 1 ? '' : 'active'} onClick={() => {
                    userId !== 1 ? setUserId(userId - 1) : setUserId(userId)
                }}><AiOutlineArrowLeft/></button>
                <span>|</span>
                <button className={userId === 3 ? '' : 'active'} onClick={() => {
                    userId < 3 ? setUserId(userId + 1) : setUserId(userId)
                }}  ><AiOutlineArrowRight/></button>
            </div>
        </div>
    </div>
  )
}

export default Testimonials