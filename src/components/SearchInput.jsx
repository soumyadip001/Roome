import React from 'react'
import { SearchRounded } from '@material-ui/icons'

import Input from '../components/Input'
import '../assets/styles/components/SearchInput.scss'

export default function SearchInput() {
  return (
    <div className="search__input">
        <div className="search__input__left">
            <SearchRounded />
        </div>
        <div className="search__input__right">
            <Input placeholder="Where are you going?" type="text" transparent />
        </div>
    </div>
  )
}
