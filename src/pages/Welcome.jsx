import React from 'react'
import '../assets/styles/components/Welcome.scss'
import Eiphel from '../assets/images/eiphel.jpg';

export default function Welcome() {
  return (
    <div className="welcome__container">
      <div className="welcome__image-box">
        <img src={Eiphel} alt="Modal One" className="welcome__image" />
        <div className="welcome__image__dots">
          <div className="dot dot--primary"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  )
}
