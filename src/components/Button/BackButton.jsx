import React from 'react'
import { ArrowBack } from '@material-ui/icons';

import Button from '../Button'

export default function BackButton({ target }) {
  return (
    <Button to="back" target={target} type="icon" block={false}>
      <ArrowBack />
    </Button>
  )
}
