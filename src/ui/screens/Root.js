import React from 'react'
import { createAppContainer } from 'react-navigation'
import { routes, routeName } from './routes'
import { createStackNavigator } from 'react-navigation-stack'
import { Users } from './Users'
import { Header } from 'screens/_components/Header'

export const createRootNavigator = initialRouteName =>
  createStackNavigator(
    {
      [routeName(routes.USERS)]: {
        screen: Users,
        navigationOptions: {
          header: () => <Header title="users.header_title" />
        }
      }
    },
    {
      initialRouteName,
      headerMode: 'screen'
    }
  )

export const Root = createAppContainer(createRootNavigator())
