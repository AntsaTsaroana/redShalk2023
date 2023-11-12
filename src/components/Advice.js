import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../assets/scss/advice.scss'
import image1 from '../assets/img/models/02.webp'
import image2 from '../assets/img/models/03.webp'
import image3 from '../assets/img/models/04.webp'
import image4 from '../assets/img/models/05.webp'
import image5 from '../assets/img/models/06.webp'
import image6 from '../assets/img/models/07.webp'

const Advice = (props) => {
  useEffect(() => {
      Aos.init();
  }, []);

    const no = props.no
    const type = props.type
    const title = props.title
    const description = props.description

  return (
    <div className='advice' id={no}>
        <div className="image" style={{
          backgroundImage: no === '01' ? `url(${image1})` : no === '02' ? `url(${image2})` : no === '03' ? `url(${image3})` : no === '04' ? `url(${image4})` : no === '05' ? `url(${image5})` : `url(${image6})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} >
            <h1 className="number" data-aos="fade-down">{type}</h1>
        </div>
        <div className="texts">
            <h1 className="title" data-aos="fade-up">{title}</h1>
            <p data-aos="fade-up">{description}</p>
            <a href={no === '01' ? '#02' : no === '02' ? '#03' : no === '03' ? '#04' : no === '04' ? '#05' : no === '05' ? '#06' : '#01' }>Morphologie suivant</a>
        </div>
    </div>
  )
}

export default Advice