import React from 'react'
import { ArrowBack } from '@material-ui/icons';

import Button from '../components/Button'
import SocialLogin from '../components/SocialLogin';
import '../assets/styles/pages/Login.scss'
import Input from '../components/Input';

export default function Register() {
  return (
    <div className="login__container">
      <Button to="back" target="/welcome" type="icon" block={false}>
        <ArrowBack />
      </Button>
      <h1>Sign up</h1>
      <SocialLogin />
      <p className="align-center para-default">
        or sign up with your email
      </p>
      <form className="login__form">
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Your Email" />
        <Input type="Password" placeholder="Password" />
        <p className="mb-8"></p>
        <Button type="primary" to="/dashboard">Sign up</Button>
      </form>

      <p className="align-center para-muted">
        By ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor
      </p>

      <div className="login__bottom">
        <p className="align-center para-default">
          Already have an account?
          <a href="/login">Login In</a>
        </p>
      </div>
    </div>
  )
}
