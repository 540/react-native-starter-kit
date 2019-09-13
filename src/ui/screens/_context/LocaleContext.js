import React from 'react'

const defaultContext = {
  language: undefined,
  translate: () => ''
}

export const LocaleContext = React.createContext(defaultContext)

export const useTrans = () => React.useContext(LocaleContext).translate
