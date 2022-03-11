import React from 'react'
import { Outlet } from 'react-router-dom'

import Nav from '../components/Dashboard/Nav'
import Tab from '../components/Tab'

export default function Favourite() {
  return (
    <div className="flex-col-start">
      <h2 className="header-small mt-4">Favourites</h2>
      <div className="flex-center w-full">
        <Tab>
          <Outlet />
        </Tab>
      </div>
      <Nav selected="liked" />
    </div>
  )
}
