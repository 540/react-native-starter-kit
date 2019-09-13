import React from 'react'
import isUndefined from 'lodash/isUndefined'
import { i18n, Languages } from 'infrastructure/locale/i18n'
import { LocaleContext } from './LocaleContext'

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
