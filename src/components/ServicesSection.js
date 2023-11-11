import React from 'react'
import '../assets/scss/servicesSection.scss'
import Service from './Service'
import services from '../data/services.json'

const ServicesSection = () => {
  return (
    <div className='servicesSection'>
        <div className="texts text-center">
            <h2>Nos services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est voluptatibus distinctio id esse quis Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="services flex items-start text-center">
            { services.map((service) => (
                <Service key={service.title} logo={service.logo} title={service.title} description={service.description} />
            )) }
        </div>
    </div>
  )
}

export default ServicesSection