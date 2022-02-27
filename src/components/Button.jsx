import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Button.scss'

export default function Button({ children, to }) {
  return (
    <Link className="btn btn--primary btn--block" to={to}>
      { children }
    </Link>
  )
}
