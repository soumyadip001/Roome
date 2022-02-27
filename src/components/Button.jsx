import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Button.scss'

export default function Button({ children, to, type }) {
  const _href = to ? to : '#'
  const buttonType = type ? type : 'secondary'

  return (
    <Link className={`btn btn--${buttonType} btn--block`} to={_href}>
      { children }
    </Link>
  )
}
