import React from 'react'
import '../../assets/styles/components/Dashboard/PopularDest.scss'

import ImageParis from '../../assets/images/places/paris.jpg'
import ImageSpain from '../../assets/images/places/spain.jpg'
import defaultImage from '../../assets/images/default.png'

export default function PopularDest() {

  const places = [
    { name: 'Paris', url: ImageParis },
    { name: 'Spain', url: ImageSpain },
    { name: 'Hawaii', url: defaultImage },
  ]

  return (
    <div className="popular__dest">
      <h3 className="header-small">Popular Destinations</h3>
      <div className="popular__dest__body">
        {
          places.map(place => 
            <div className="destination__card" key={place.name}>
              <span>{ place.name }</span>
              <img src={place.url} className="destination__card__background" alt="Default card" />
            </div>
          )
        }
      </div>
    </div>
  )
}
