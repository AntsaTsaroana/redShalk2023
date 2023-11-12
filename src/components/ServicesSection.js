import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../assets/scss/servicesSection.scss'
import Service from './Service'
import services from '../data/services.json'

const ServicesSection = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className='servicesSection'>
            <div className="texts text-center">
                {/* <h2>Nos services</h2> */}
                <span class="heading" data-aos="fade-up">
                    <h1>NOS SERVICES</h1>
                    <h2>NOS SERVICES</h2>
                </span>
                <p data-aos="fade-down">Explorez nos services de stylisme sur mesure, conçus pour vous aider à exprimer votre style personnel et à briller dans toutes les occasions. Découvrez comment nous pouvons vous aider.</p>
            </div>
            <div className="services flex items-start text-center">
                {services.map((service) => (
                    <Service key={service.title} logo={service.logo} title={service.title} description={service.description} />
                ))}
            </div>
        </div>
    )
}

export default ServicesSection