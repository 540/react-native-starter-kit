import { NavigationActions, StackActions } from 'react-navigation'
import { routeName, routes } from 'screens/routes'

export const navigator = (() => {
  let navigation

  return {
    setNavigator: navigationDispatcher => {
      navigation = navigationDispatcher
    },

    goBack: () => navigation.dispatch(NavigationActions.back()),

    goToUsers: () => navigation.dispatch(resetActionTo(routes.USERS))
  }
})()

const actionTo = (route, params = {}) => NavigationActions.navigate({ routeName: routeName(route), params })

const resetActionTo = (route, params = {}) =>
  StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: routeName(route), params })],
    key: null
  })
