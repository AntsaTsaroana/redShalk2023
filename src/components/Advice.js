import React from 'react'
import '../assets/scss/advice.scss'

const Advice = (props) => {

    const no = props.no
    const title = props.title
    const description = props.description

  return (
    <div className='advice' id={no}>
        <div className="image">
            <h1 className="number">{no}</h1>
        </div>
        <div className="texts">
            <h1 className="title">{title}</h1>
            <p>{description}</p>
            <a href={no === '01' ? '#02' : no === '02' ? '#03' : no === '03' ? '#04' : no === '04' ? '#05' : no === '05' ? '#06' : '#01' }>Morphologie suivant</a>
        </div>
    </div>
  )
}

export default Advice