import React from 'react'
import { addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { Layout } from './layout'

addDecorator(withKnobs)
addDecorator((storyFn) => <Layout>{storyFn()}</Layout>)
