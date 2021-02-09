import { boolean, text } from '@storybook/addon-knobs'
import React from 'react'
import { SimpleButton } from './SimpleButton'

export default { title: 'Some Title' }

export const primary = () => {
  return <SimpleButton>{text('text', 'Some Text')}</SimpleButton>
}

export const secondary = () => {
  return (
    <SimpleButton disabled={boolean('disabled', false)}>
      {text('text', 'another text')}
    </SimpleButton>
  )
}
