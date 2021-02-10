import React from 'react'
import '../../../libs/theme/src/lib/tailwind.css'
// import { ThemeProvider } from '@dreamstack/theme'

export const Layout = ({ children }) => {
  return (
    <>
      <div className="px-20 py-10">{children}</div>
    </>
  )
}
