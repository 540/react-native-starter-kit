import React from 'react'
import { createAppContainer } from 'react-navigation'
import { render } from '@testing-library/react-native'
import { WithProviders } from 'screens/App'
import { createRootNavigator } from 'screens/Root'
import { routeName } from 'screens/routes'

export const renderScreen = route => {
  const Root = createAppContainer(createRootNavigator(routeName(route)))
  return render(
    <WithProviders>
      <Root />
    </WithProviders>
  )
}
