import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Button.scss'

export default function Button({ children, to, type, block, target }) {
  const _href = to ? to : '#'
  const _target = target ? target : '#'
  const buttonType = type ? type : 'secondary'
  const buttonBlock = !!block ? '' : 'btn--block'
  let buttonHistory = false

  if (_href === 'back' || _href === 'forward') {
    buttonHistory = true
  }

  return !buttonHistory ?
  <Link className={`btn btn--${buttonType} ${buttonBlock}`} to={_href}>
    { children }
  </Link>
  :
  <Link className={`btn btn--${buttonType} ${buttonBlock}`} to={_target}>
    { children }
  </Link>;
}
