import React from 'react'
import { FavoriteBorder } from '@material-ui/icons';

import Button from '../Button'

export default function FavButton({ target }) {
  return (
    <Button type="icon" block={false}>
      <FavoriteBorder />
    </Button>
  )
}
