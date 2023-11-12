import React from 'react'
import '../assets/scss/servicesSection.scss'
import Service from './Service'
import services from '../data/services.json'

const ServicesSection = () => {
  return (
    <div className='servicesSection'>
        <div className="texts text-center">
            {/* <h2>Nos services</h2> */}
            <span class="heading">
                <h1>NOS SERVICES</h1>
                <h2>NOS SERVICES</h2>
            </span>
            <p>Explorez nos services de stylisme sur mesure, conçus pour vous aider à exprimer votre style personnel et à briller dans toutes les occasions. Découvrez comment nous pouvons vous aider.</p>
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