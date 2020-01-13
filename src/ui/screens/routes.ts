import isUndefined from 'lodash/isUndefined'

export const routes = {
  USERS: { name: 'User' }
}

export const routeName = (route: { name: string }): string => {
  if (isUndefined(route)) {
    return ''
  }

  return route.name
}
