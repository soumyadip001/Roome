import React from 'react'

import Button from '../components/Button'
import '../assets/styles/pages/Dashboard.scss'
import SearchInput from '../components/SearchInput'
import Dots from '../components/Slider/Dots';
import Nav from '../components/Dashboard/Nav';
import PopularDest from '../components/Dashboard/PopularDest';
import BestDeal from '../components/Dashboard/BestDeal';
import LastSearches from '../components/Dashboard/LastSearches';

export default function Dashboard() {
  return (
    <div className="dash__container">
      <div className="dash__top">
        <SearchInput />
        <div className="dash__details">
          <h2>Cape Town</h2>
          <p>Extra ipsum dolor sit am sit loreet, sed dolor sit amet</p>
          <div className="flex-container">
            <div className="flex-col-6">
              <Button type="primary" block={false}>View Hotels</Button>
            </div>
            <div className="flex-col-6">
              <Dots light />
            </div>
          </div>
        </div>
      </div>
      <div className="dash__body">
        <PopularDest />
        <BestDeal />
        <LastSearches />
        <div className="mt-100">
          lorem ipsum dolor
        </div>
      </div>
      <Nav />
    </div>
  )
}
