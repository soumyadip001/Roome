import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import {
  Lock, Group, Settings, CreditCard, Help, Redeem
} from '@material-ui/icons'

import Nav from '../components/Dashboard/Nav'

import '../assets/styles/pages/Profile.scss'
import ProfileImage from '../assets/images/profile-default.jpg'

export default function profile() {
  return (
    <div className="profile__container">
      <div className="profile__top">
        <div className="profile__details">
          <h2>Soumyadip</h2>
          <p>View and edit profile</p>
        </div>
        <div className="profile__image">
          <img src={ProfileImage} alt="Profile" />
        </div>
      </div>
      <div className="profile__actions">
        <ul className="profile__nav">
          <li className="profile__nav__item">
            <h3 className="profile__nav__item__title">
              <Link to="/profile/change-password">
                Change Password
              </Link>
            </h3>
            <div className="profile__nav__item__icon">
              <Lock />
            </div>
          </li>
          <li className="profile__nav__item">
            <h3 className="profile__nav__item__title">
              <Link to="/profile/invite">Invite Friends</Link>
            </h3>
            <div className="profile__nav__item__icon">
              <Group />
            </div>
          </li>
          <li className="profile__nav__item">
            <h3 className="profile__nav__item__title">
              <Link to="/profile/credits">Credits & Coupons</Link>
            </h3>
            <div className="profile__nav__item__icon">
              <Redeem />
            </div>
          </li>
          <li className="profile__nav__item">
            <h3 className="profile__nav__item__title">
              <Link to="/help">Help Center</Link>
            </h3>
            <div className="profile__nav__item__icon">
              <Help />
            </div>
          </li>
          <li className="profile__nav__item">
            <h3 className="profile__nav__item__title">
              <Link to="/profile/payment">Payments</Link>
            </h3>
            <div className="profile__nav__item__icon">
              <CreditCard />
            </div>
          </li>
          <li className="profile__nav__item">
            <h3 className="profile__nav__item__title">
              <Link to="/profile/settings">Settings</Link>
            </h3>
            <div className="profile__nav__item__icon">
              <Settings />
            </div>
          </li>
        </ul>
      </div>
      <Nav selected="profile" />
      <Outlet />
    </div>
  )
}
