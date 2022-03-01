import React from 'react'
import '../../assets/styles/components/Slider/Dots.scss'

export default function Dots({ light }) {
  const _lightClass = light ? 'dot--light' : null

  return (
    <div className="welcome__image__dots">
      <div className="dot dot--primary"></div>
      <div className={`dot ${_lightClass}`}></div>
      <div className={`dot ${_lightClass}`}></div>
    </div>
  )
}
