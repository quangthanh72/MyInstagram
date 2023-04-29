import { View, Text , Image, StyleSheet, SafeAreaView} from 'react-native'
import React from 'react'


const Header = () => {
  return (
    <SafeAreaView>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  logo:{
    width: 100,
    height: 50,
    resizeMode: 'contain',
    top: 40,
  },
})

export default Header