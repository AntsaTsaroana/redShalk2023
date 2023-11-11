import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai"
import '../assets/scss/advice.scss'

const AdviceBanner = () => {
  return (
    <div className='adviceBanner'>
        <div className="image"></div>
        <div className="texts">
            <p>Mettez en valeur votre personnalité grâce à nos suggestions de mode.</p>
            <a href="#01">
              Commencer
                <AiOutlineArrowRight/>
            </a>
        </div>
    </div>
  )
}

export default AdviceBanner