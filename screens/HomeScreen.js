import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, StyleSheet,StatusBar } from 'react-native'
import React from 'react' 
import Header from '../components/home/Header'



const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex:1, marginTop: StatusBar.currentHeight}}>
      <Header></Header>
       
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:  'white',
        flex: 1,  
    },
})

export default HomeScreen
// SafeAreaView
