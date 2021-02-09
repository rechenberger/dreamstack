import React from 'react'
import { render } from '@testing-library/react'

import SimpleComponents from './simple-components'

describe('SimpleComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SimpleComponents />)
    expect(baseElement).toBeTruthy()
  })
})
