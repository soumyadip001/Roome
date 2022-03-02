import React from 'react'
import { Link } from 'react-router-dom'
import { Search, FavoriteBorder, PersonOutline } from '@material-ui/icons';

import '../../assets/styles/components/Dashboard/Nav.scss'

export default function Nav({ selected }) {
  const _selected = selected ? selected : 'explore'

  return (
    <div className="dash__nav">
      <ul className="dash__nav__list">
        <li
          className={
            _selected.toLowerCase() === 'explore'
              ? `dash__nav__list-item dash__nav__list-item--default`
              : `dash__nav__list-item`
          }
        >
          <Search />
          <span className="para-default">
            <Link to="/dashboard">Explore</Link>
          </span>
        </li>
        <li
          className={
            _selected.toLowerCase() === 'liked'
              ? `dash__nav__list-item dash__nav__list-item--default`
              : `dash__nav__list-item`
          }
        >
          <FavoriteBorder />
          <span className="para-default">
            <Link to="/favourite">Liked</Link>
          </span>
        </li>
        <li
          className={
            _selected.toLowerCase() === 'profile'
              ? `dash__nav__list-item dash__nav__list-item--default`
              : `dash__nav__list-item`
          }
        >
          <PersonOutline />
          <span className="para-default">
            <Link to="/profile">Profile</Link>
          </span>
        </li>
      </ul>
    </div>
  )
}
