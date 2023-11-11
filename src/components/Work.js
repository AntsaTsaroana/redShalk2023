import React from 'react'
import '../assets/scss/aboutMe.scss'

const Work = (props) => {

    const title = props.title
    const subtitle = props.subtitle
    const image = props.image

  return (
    <div className='work'>
        <div className="desc">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
        </div>
        <div className="image" style={{
            background: `${image}`
        }}></div>
    </div>
  )
}

export default Work