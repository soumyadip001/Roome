import React from 'react'
import { ArrowBack } from '@material-ui/icons';

import Button from '../components/Button'
import SocialLogin from '../components/SocialLogin';
import '../assets/styles/pages/Login.scss'
import Input from '../components/Input';

export default function Login() {
  return (
    <div className="login__container">
      <Button to="back" target="/welcome" type="icon" block={false}>
        <ArrowBack />
      </Button>
      <h1>Log in</h1>
      <SocialLogin />
      <p className="align-center para-default">
        or sign in with your email
      </p>
      <form className="login__form">
        <Input placeholder="Your Email" />
        <Input type="Password" placeholder="Password" />
        <p className="align-right mb-8 para-muted">
          <a href="#forgot">Forgot your password?</a>
        </p>
        <Button type="primary" to="/dashboard">Login In</Button>
      </form>

      <div className="login__bottom">
        <p className="align-center para-default">
          Don't have an account?
          <a href="/register">Sign up</a>
        </p>
      </div>
    </div>
  )
}
