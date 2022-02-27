import React from 'react'
import { SearchRounded } from '@material-ui/icons';

import Input from '../components/Input'
import Button from '../components/Button'
import '../assets/styles/pages/Dashboard.scss'

export default function Dashboard() {
  return (
    <div className="dash__container">
      <div className="dash__top">
        <div className="search__input">
          <div className="search__input__left">
            <SearchRounded />
          </div>
          <div className="search__input__right">
            <Input placeholder="Where are you going?" type="text" />
          </div>
        </div>
        <div className="dash__details">
          <h2>Cape Town</h2>
          <p>lorem ipsum dolor sit am sit loreet, sed dolor sit amet</p>
          <Button type="primary" block={false}>View Hotels</Button>
        </div>
      </div>
      <div>
        Popular Destinations
      </div>
    </div>
  )
}
