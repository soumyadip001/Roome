import React from 'react'
import { FavoriteBorder } from '@material-ui/icons';

import Button from '../Button'

export default function FavButton({ theme = 'dark' }) {
  return (
    <div className={`btn--rounded btn--${theme}`}>
      <Button type="icon" block={false}>
        <FavoriteBorder />
      </Button>
    </div>
  )
}
