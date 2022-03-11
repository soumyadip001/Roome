import React from 'react'
import { NavLink } from 'react-router-dom'

import '../assets/styles/components/Tab.scss'

export default function Tab({ children }) {

  const activeClass = (navData) => (
    navData.isActive
      ? "tab__list-link tab__list-link--selected"
      : 'tab__list-link'
  )

  return (
    <div className="tab__container">
      <ul className="tab__list">
        <li className="tab__list-item">
          <NavLink
            to="popular"
            className={activeClass}
          >
            Popular
          </NavLink>
        </li>
        <li className="tab__list-item">
          <NavLink
            to="featured"
            className={activeClass}
          >
            Featured
          </NavLink>
        </li>
        <li className="tab__list-item">
          <NavLink
            to="favourites"
            className={activeClass}
          >
            Favourites
          </NavLink>
        </li>
      </ul>
      <div className="tab__body">
        { children }
      </div>
    </div>
  )
}
