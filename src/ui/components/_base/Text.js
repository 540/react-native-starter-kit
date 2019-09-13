import React from 'react'
import { Text as BaseText } from 'react-native'
import { color as colorMap, mapFontSizeStyles, mapFontTypeStyles } from 'theme'

export const Text = ({ type, size = 'base', color, style, children, ...props }) => {
  return (
    <BaseText
      allowFontScaling={false}
      style={[mapFontTypeStyles[type], { color: colorMap[color] }, mapFontSizeStyles[size], style]}
      {...props}>
      {children}
    </BaseText>
  )
}
