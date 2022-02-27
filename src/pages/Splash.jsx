import React from 'react'
import '../assets/styles/components/Splash.scss'

import Logo from '../components/Logo'
import Button from '../components/Button'

import GirlImage from '../assets/images/girl-standing.jpg';

export default function Splash() {
  return (
    <div className="splash__container">
      <div className="splash__top">
        <Logo />
        <h1>Roome</h1>
        <p>
          Best hotel deals for you today
        </p>
      </div>
      <div className="splash__middle">
        <img
          src={GirlImage}
          alt="Girl standing"
          className="splash__middle__image"
        />
      </div>
      <div className="splash__bottom">
        <Button to="welcome" type="primary">Get Started</Button>
        <p className="splash__more">
          Already have an account?
          <a href="/login" className="">Login</a>
        </p>
      </div>
    </div>
  )
}
