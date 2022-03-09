import React from 'react'

import '../../assets/styles/pages/Profile.scss'
import Button from '../../components/Button'
import BackButton from '../../components/Button/BackButton'
import Input from '../../components/Input'
import Keyboard from '../../components/Keyboard'

export default function ChangePassword() {
  return (
    <div className="flex-col-start">
      <BackButton target="/profile" />
      <h2 className="header-small mt-10">Reset Password</h2>
      <p className="mt-4 mb-8 mr-4 header-secondary-text">lorem ipsum dolor sit amet lore m lorem ipsum dolor sit amet</p>

      <div className="profile__below__input">
        <Input type="password" placeholder={'Enter your password'} />
        <Input type="password" placeholder={'Re enter your password'} />
        <Button block type="primary">Reset Password</Button>
      </div>

      <div className="stick-bottom">
        <Keyboard />
      </div>
    </div>
  )
}
