import React from 'react'
import '../../assets/styles/components/Dashboard/LastSearches.scss'

import defaultImage from '../../assets/images/Card-hotel.png'
import ImageLondon from '../../assets/images/places/london.jpg'
import ImageParis from '../../assets/images/places/paris.jpg'
import ImageSpain from '../../assets/images/places/spain.jpg'

export default function LastSearches() {

    const places = [
      { name: 'London', url: ImageLondon },
      { name: 'Paris', url: ImageParis },
      { name: 'Spain', url: ImageSpain },
      { name: 'Hawaii', url: defaultImage },
    ]

  return (
    <div className="last-search">
      <h3 className="header-small">Last Searches</h3>
      <div className="last-search__body">
      {
        places.map(place => 
          <div className="last-search__card" key={place.name}>
            <img src={place.url} className="last-search__background" alt="Default card" />
            <div className="last-search__details">
              <h4>{ place.name }</h4>
              <p>1 Room - 3 adults</p>
              <p>10-13 Jan</p>
            </div>
          </div>
        )
      }
      </div>
    </div>
  )
}
