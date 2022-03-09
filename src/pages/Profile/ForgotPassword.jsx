import React from 'react'

import '../../assets/styles/pages/Profile.scss'
import Button from '../../components/Button'
import BackButton from '../../components/Button/BackButton'
import Input from '../../components/Input'
import Keyboard from '../../components/Keyboard'

export default function ForgotPassword() {
  return (
    <div className="flex-col-start">
      <BackButton target="/profile" />
      <h2 className="header-small mt-10">Forgot Password</h2>
      <p className="mt-4 mb-8 mr-4 header-secondary-text">lorem ipsum dolor sit amet lore m lorem ipsum dolor sit amet</p>

      <div className="profile__below__input">
        <Input placeholder={'Enter Your Email'} />
        <Button block type="primary">Reset</Button>
      </div>

      <div className="stick-bottom">
        <Keyboard />
      </div>
    </div>
  )
}
