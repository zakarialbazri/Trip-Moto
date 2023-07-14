import React from 'react';
import style from './aboutus.css';
import Asseds from '../Asseds/AboutUs__Image'

const AboutUs = () => {
  return (
    <div className='AboutUS'>
        <div className='AboutUs__text'>
            <h1 className='AboutUs__title'> 
            Who We Are?!
            </h1>
            <p className='AboutUs__paragraphe'>
            L'objectif de MotoVenter est de aider la communauté des motards en leur fournissant une plateforme conviviale pour trouver et partager des lieux de voyage et proposer des balades. Ce site web permettra aux motards de découvrir de nouvelles destinations adaptées aux motos, avec des informations détaillées sur les routes, les attractions locales et les hébergements moto-friendly, le tout dans le but de faciliter l'organisation de voyages et de renforcer la cohésion de la communauté des motards.
            </p>             
        </div>

        <div className='AboutUs__imageContainer'>
          <Asseds />
        </div>
    </div>
  )
}

export default AboutUs