import React from 'react'
import { LocaleProvider } from './_context/LocaleProvider'
import { Root } from './Root'

export const WithProviders = props => <LocaleProvider>{props.children}</LocaleProvider>

export const App = () => (
  <WithProviders>
    <Root />
  </WithProviders>
)
