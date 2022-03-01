import React from 'react'
import '../../assets/styles/components/Dashboard/PopularDest.scss'
import defaultImage from '../../assets/images/default.png'

export default function PopularDest() {

  const places = [
    { name: 'Paris', url: '' },
    { name: 'Spain', url: '' },
    { name: 'Hawaii', url: '' },
  ]

  return (
    <div className="popular__dest">
      <h3 className="header-small">Popular Destinations</h3>
      <div className="popular__dest__body">
        {
          places.map(place => 
            <div className="destination__card" key={place.name}>
              <span>{ place.name }</span>
              <img src={defaultImage} className="destination__card__background" alt="Default card" />
            </div>
          )
        }        
      </div>
    </div>
  )
}
