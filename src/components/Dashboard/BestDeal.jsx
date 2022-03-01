import React from 'react'
import { Room, Star, StarHalf, StarOutline } from '@material-ui/icons'

import '../../assets/styles/components/Dashboard/BestDeal.scss'
import defaultImage from '../../assets/images/Card-hotel.png'

export default function BestDeal() {

  const hotelDeals = [
    {
      id: '1',
      direction: '2 km from Goa',
      lastUpdate: '3hr ago',
      price: 250,
      starCount: 4,
      subtitle: 'Delhi, India',
      title: 'Grand Royal Hotel',
      url: defaultImage,
    },
    {
      id: '2',
      direction: '1 km from Digha',
      lastUpdate: '1hr ago',
      price: 180,
      starCount: 3.5,
      subtitle: 'Delhi, India',
      title: 'Taj Bengal Hotel',
      url: defaultImage,
    },
    {
      id: '3',
      direction: '0.5 km from Puri beach',
      lastUpdate: '1 day ago',
      price: 480,
      starCount: 5,
      subtitle: 'Kolkata, India',
      title: 'ITC Sonal Tari',
      url: defaultImage,
    },
    {
      id: '4',
      direction: '2 km from Goa',
      lastUpdate: '2 min ago',
      price: 90,
      starCount: 4.5,
      subtitle: 'Delhi, India',
      title: 'Imperial Hotel',
      url: defaultImage,
    },
    {
      id: '5',
      direction: '1 mtr from Darjeeling',
      lastUpdate: '4 days ago',
      price: 980,
      starCount: 2.5,
      subtitle: 'Darjeeling, India',
      title: 'Summit Montana Suites & Spa(Mall Road)',
      url: defaultImage,
    }
  ]

  const getFullStars = (rating) => {
    return Math.floor(rating)
  }

  const getHalfStar = (rating) => {
    return (rating - Math.floor(rating)) ? 1 : 0
  }

  const blankStar = (rating) => {
    const halfStar = (rating - Math.floor(rating)) ? 1 : 0
    const fullStar = Math.floor(rating)

    return (5 - (halfStar + fullStar))
  }

  return (
    <div className="best-deal">
      <h3 className="header-small">Best Deal</h3>

      {
        hotelDeals.map(hotel =>
          <div className="best-deal__card flex-container" key={hotel.id}>
            <div className="best-deal__card__image">
              <img src={hotel.url} alt="Hotel Name Here" />
            </div>
            <div className="best-deal__card__details">
              <div>
                <h3 className="best-deal__card__header">{ hotel.title }</h3>
                <p className="best-deal__card__subheader">{ hotel.subtitle }</p>
              </div>
              <div className="best-deal__card__desc">
                <div className="best-deal__card__info">
                  <p className="best-deal__card__info__direction">
                    <Room />
                    { hotel.direction }
                  </p>
                  <p className="best-deal__card__info__rating">
                    {[...Array(getFullStars(hotel.starCount))].map((_star, index) => {
                      return <Star key={index} />
                    })}

                    {[...Array(getHalfStar(hotel.starCount))].map((_star, index) => {
                      return <StarHalf key={index} />
                    })}

                    {[...Array(blankStar(hotel.starCount))].map((_star, index) => {
                      return <StarOutline key={index} />
                    })}
                  </p>
                </div>
                <div className="best-deal__card__price">
                  <h2>${ hotel.price }</h2>
                  <small>{ hotel.lastUpdate }</small>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
