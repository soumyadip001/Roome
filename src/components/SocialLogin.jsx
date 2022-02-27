import React from 'react'
import { Facebook, Twitter } from '@material-ui/icons';
import '../assets/styles/components/SocialLogin.scss'

export default function SocialLogin() {
  return (
    <div className="social__login">
        <button className="social__button social__button__fb">
            <Facebook />
            Facebook
        </button>
        <button className="social__button social__button__tw">
            <Twitter />
            Twitter
        </button>
    </div>
  )
}
