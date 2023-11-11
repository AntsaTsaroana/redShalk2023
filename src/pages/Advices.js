import React from 'react'
import AdviceBanner from '../components/AdviceBanner'
import Advice from '../components/Advice'
import advices from '../data/advices.json'

const Advices = () => {
  return (
    <>
        <AdviceBanner/>
        {
            advices.map((advice) => (<Advice key={advice.no} no={advice.no} title={advice.title} description={advice.description} image={advice.image} type={advice.type} />))
        }
    </>
  )
}

export default Advices