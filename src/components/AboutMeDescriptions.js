import React from 'react'
import '../assets/scss/aboutMe.scss'

const AboutMeDescriptions = () => {
  return (
    <div className='descriptions'>
        <div className="left">
            <h1>A-propos de moi</h1>
            <div className="image"></div>
        </div>
        <div className="right" style={{paddingTop: '55px'}}>
            <p>Je suis <span>Antsa Harizafy</span> fondatrice de <span>Antsa Créations</span>. <br /><br /> Une styliste passionnée et une couturière méticuleuse, experte dans la création de vêtements uniques et sur mesure. Mon objectif est de créer un modèle unique pour chaque personne et de donner vie à vos rêves de mode en alliant créativité, artisanat et une attention personnalisée à chaque détail.</p>
            <a href="#works">Mes travaux</a>
        </div>
    </div>
  )
}

export default AboutMeDescriptions