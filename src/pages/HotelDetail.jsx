import React from 'react'

import '../assets/styles/pages/HotelDetails.scss'
import Button from '../components/Button'
import BackButton from '../components/Button/BackButton'

export default function HotelDetail() {
  return (
    <div className="hd__container">
      <div className="hd__banner-box">
        <div className="hd__nav">
          <BackButton to="#" />
          Fav
        </div>
        <div className="hd__banner__card">
          <div className="hd__banner__card--top">
            <div className="hd__banner__card--left">
              <h2>Grand Royal Hotel</h2>
              <p>lorem ipsum dolor sit</p>
              <p>***** Start Rating</p>
            </div>
            <div className="hd__banner__card--right">
              <h2>$220</h2>
              <small>2 min ago</small>
            </div>
          </div>
          <div className="hd__banner__card--bottom">
            <Button block={true}>Pick Time</Button>
          </div>
        </div>
      </div>
      <div className="hd__details">
        <p>Summery</p>
        <p>
          lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor dolor, sed diam non
        </p>
      </div>
      <div className="hd__photos">
        Photoes Sections
      </div>
      <div className="hd__reviews">
        Photoes Sections
      </div>
    </div>
  )
}
