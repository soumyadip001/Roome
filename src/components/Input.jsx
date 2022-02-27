import React from 'react'
import '../assets/styles/components/Input.scss'

export default function Input({ type, placeholder, transparent }) {
  const _type = type ? type : 'text'
  const _transparent = transparent ? 'bg-transparent' : null

  return (
    <div className="form__control">
      <input type={_type} placeholder={placeholder} className={`${_transparent}`} />
    </div>
  )
}
