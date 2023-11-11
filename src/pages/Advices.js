import React from 'react'
import AdviceBanner from '../components/AdviceBanner'
import Advice from '../components/Advice'
import advices from '../data/advices.json'

const Advices = () => {
  return (
    <>
        <AdviceBanner/>
        {
            advices.map((advice) => (<Advice key={advice.no} no={advice.no} title={advice.title} description={advice.description} />))
        }
    </>
  )
}

export default Advices