import { remBase, StyleSheet } from 'components/_base'

export const rem = px => `${px / remBase}rem`

const fontSizeStyles = StyleSheet.create({
  base: {
    fontSize: rem(16),
    lineHeight: rem(19)
  }
})

export const mapFontSizeStyles = {
  base: fontSizeStyles.base
}

const fontTypeStyles = StyleSheet.create({
  proximaNova: {
    fontFamily: 'ProximaNova-Regular'
  }
})

export const mapFontTypeStyles = {
  regular: fontTypeStyles.proximaNova
}
