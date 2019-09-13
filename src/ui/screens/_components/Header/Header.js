import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'components/_base'
import { color } from 'theme'
import { useTrans } from 'screens/_context/LocaleContext'

export const Header = ({ title }) => {
  const trans = useTrans()

  return (
    <SafeAreaView style={styles.header}>
      <Text color="black" type="regular" style={styles.headerItem}>
        {trans(title)}
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.brand
  }
})
