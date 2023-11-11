import React from 'react'
import AboutMeHeroBanner from '../components/AboutMeHeroBanner'
import AboutMeDescriptions from '../components/AboutMeDescriptions'
import Works from '../data/works.json'
import Work from '../components/Work'

const AboutMe = () => {
  return (
    <>
        <AboutMeHeroBanner/>
        <AboutMeDescriptions/>
        <div className="works" id='works'>
          { Works.map((work) => (
            <Work key={work.title} title={work.title} subtitle={work.subtitle} image={work.image} />
          )) }
        </div>
        {/* Some Text
        Some Work
        Keyword about me */}
    </>
  )
}

export default AboutMe