import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>Footer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'red',
        height: 70,
        borderWidth: 1,
        borderTopColor: 'blue'
    },
});

export default Footer