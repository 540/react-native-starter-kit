import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'components/_base'
import { useTrans } from 'screens/_context/LocaleContext'
import isUndefined from 'lodash/isUndefined'
import { size } from 'theme'

export const Users = ({ users, error }) => {
  const trans = useTrans()

  if (!isUndefined(error)) {
    return (
      <Text color="black" type="regular">
        {error}
      </Text>
    )
  }

  return (
    <View>
      <Text color="black" type="regular" style={styles.title}>
        {trans('users.title')}
      </Text>
      <FlatList
        data={users}
        renderItem={({ item: user }) => <UserItem user={user} />}
        keyExtractor={user => user.getId()}
      />
    </View>
  )
}

const UserItem = ({ user }) => {
  const trans = useTrans()

  return (
    <View style={styles.userItem}>
      <Text color="black" type="regular" style={styles.nameLabel}>{`${trans('users.name')}:`}</Text>
      <Text color="black" type="regular">
        {user.getName()}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    marginVertical: size.base,
    paddingLeft: size.baseScale(1)
  },
  userItem: {
    flexDirection: 'row',
    marginVertical: size.base,
    paddingLeft: size.baseScale(2)
  },
  nameLabel: {
    marginRight: size.smallScale(1)
  }
})
