import React from 'react'
import '../assets/styles/components/Input.scss'

export default function Input({ type, placeholder }) {
  const _type = type ? type : 'text'

  return (
    <div className="form__control">
      <input type={_type} placeholder={placeholder} />
    </div>
  )
}
