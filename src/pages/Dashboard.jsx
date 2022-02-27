import React from 'react'

import Button from '../components/Button'
import '../assets/styles/pages/Dashboard.scss'
import SearchInput from '../components/SearchInput'

export default function Dashboard() {
  return (
    <div className="dash__container">
      <div className="dash__top">
        <SearchInput />
        <div className="dash__details">
          <h2>Cape Town</h2>
          <p>Extra ipsum dolor sit am sit loreet, sed dolor sit amet</p>
          <div>
            <Button type="primary" block={false}>View Hotels</Button>
            <div></div>
          </div>
        </div>
      </div>
      <div>
        Popular Destinations
      </div>
    </div>
  )
}
