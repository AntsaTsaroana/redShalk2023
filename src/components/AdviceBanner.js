import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai"
import '../assets/scss/advice.scss'

const AdviceBanner = () => {
  return (
    <div className='adviceBanner'>
        <div className="image"></div>
        <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, animi.</p>
            <a href="#01">
                Get started
                <AiOutlineArrowRight/>
            </a>
        </div>
    </div>
  )
}

export default AdviceBanner