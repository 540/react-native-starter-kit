import React from 'react'
import isUndefined from 'lodash/isUndefined'
import { i18n, Languages } from './i18n'

const defaultContext = {
  language: undefined,
  translate: () => ''
}

const LocaleContext = React.createContext(defaultContext)

export const useTrans = () => React.useContext(LocaleContext).translate

export class LocaleProvider extends React.Component {
  constructor(props: Props) {
    super(props)

    this.state = {
      languageCode: undefined
    }
    this.fetchLocale()
  }

  render() {
    const currentLanguage = isUndefined(this.state.languageCode) ? undefined : Languages[this.state.languageCode]

    return (
      <LocaleContext.Provider
        value={{
          language: currentLanguage,
          translate: (scope, options) => (isUndefined(currentLanguage) ? '' : i18n.translate(scope, options))
        }}>
        {this.props.children}
      </LocaleContext.Provider>
    )
  }

  fetchLocale = async () => {
    await i18n.init()
    this.setState({
      languageCode: i18n.locale()
    })
  }
}
