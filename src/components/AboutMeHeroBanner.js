import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../assets/scss/aboutMe.scss'

const AboutMeHeroBanner = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className='aboutMeHeroBanner'>
      <div className="texts">
        <h1 data-aos="fade-up">Antsa Harizafy</h1>
        <p>Styliste - Fashion Designer - Conseillère en image</p>
      </div>
    </div>
  )
}

export default AboutMeHeroBanner