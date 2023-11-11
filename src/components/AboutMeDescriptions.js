import React from 'react'
import '../assets/scss/aboutMe.scss'

const AboutMeDescriptions = () => {
  return (
    <div className='descriptions'>
        <div className="left">
            <h1>About me</h1>
            <div className="image"></div>
        </div>
        <div className="right">
            <p>Je suis <span>Antsa Harizafy</span> fondatrice de <span>Antsa Créations</span>. <br /><br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa modi, consequatur quam beatae dolore eius est reprehenderit, iste laboriosam voluptatibus amet porro quisquam magnam accusamus facere quas, tempore tenetur rerum!</p>
            <a href="#works">My works</a>
        </div>
    </div>
  )
}

export default AboutMeDescriptions