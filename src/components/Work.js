import React from 'react'
import '../assets/scss/aboutMe.scss'
import image01 from '../assets/img/collection1.jpg'
import image02 from '../assets/img/collection2.jpg'
import image03 from '../assets/img/collection3.jpg'

const Work = (props) => {

    const title = props.title
    const subtitle = props.subtitle
    const id = props.id

  return (
    <div className='work'>
        <div className="desc">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
        </div>
        <div className="image" style={{
          backgroundImage: id === 1 ? `url(${image01})` : id === 2 ? `url(${image02})` : `url(${image03})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
    </div>
  )
}

export default Work