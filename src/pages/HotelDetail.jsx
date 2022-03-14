import React from 'react'
import { Star, StarHalf, StarOutline } from '@material-ui/icons'

import '../assets/styles/pages/HotelDetails.scss'
import Button from '../components/Button'
import BackButton from '../components/Button/BackButton'
import FavButton from '../components/Button/FavButton'

export default function HotelDetail() {
  return (
    <div className="hd__container">
      <div className="hd__banner-box">
        <div className="hd__nav">
          <BackButton to="#" theme="light" />
          <FavButton to="#" />
        </div>
        <div className="hd__banner__card">
          <div className="hd__banner__card--top">
            <div className="hd__banner__card--left">
              <h2>Grand Royal Hotel</h2>
              <p>lorem ipsum dolor sit</p>
              <p className="text-primary mt-2 flex-center">
                <Star key={1} />
                <Star key={2} />
                <Star key={3} />
                <StarHalf key={4} />
                <StarOutline key={5} />
                <span className="ml-2">from 228 reviews</span>
              </p>
            </div>
            <div className="hd__banner__card--right">
              <h2>$220</h2>
              <small>2 min ago</small>
            </div>
          </div>
          <div className="hd__banner__card--bottom">
            <Button block={true} type="primary">Pick Time</Button>
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
