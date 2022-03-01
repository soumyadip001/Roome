import React from 'react'
import { Link } from 'react-router-dom'
import { Search, FavoriteBorder, PersonOutline } from '@material-ui/icons';

import '../../assets/styles/components/Dashboard/Nav.scss'

export default function Nav() {
  return (
    <div className="dash__nav">
      <ul className="dash__nav__list">
        <li className="dash__nav__list-item dash__nav__list-item--default">
          <Search />
          <span className="para-default">
            <Link to="/dashboard">Explore</Link>
          </span>
        </li>
        <li className="dash__nav__list-item">
          <FavoriteBorder />
          <span className="para-default">
            <Link to="/favourite">Liked</Link>
          </span>
        </li>
        <li className="dash__nav__list-item">
          <PersonOutline />
          <span className="para-default">
            <Link to="/profile">Profile</Link>
          </span>
        </li>
      </ul>
    </div>
  )
}
