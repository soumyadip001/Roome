import React from 'react'
import '../assets/styles/components/Welcome.scss'
import Eiphel from '../assets/images/eiphel.jpg';
import Button from '../components/Button';
import Dots from '../components/Slider/Dots';

export default function Welcome() {
  return (
    <div className="welcome__container">
      <div className="welcome__image-box">
        <img src={Eiphel} alt="Modal One" className="welcome__image" />
        <Dots />
      </div>
      <div className="welcome__desc">
        <h1>Plan your trips</h1>
        <p>Lorem ipsum dolor sit amet. lorem ipsum dolor sit amet</p>
        <div className="welcome__desc__actions">
          <Button to="/login" type="primary">Login</Button>
          <Button to="/register">Create Account</Button>
        </div>
      </div>
    </div>
  )
}
