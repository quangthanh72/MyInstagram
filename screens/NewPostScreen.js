import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import AddNewPost from '../components/newPost/AddNewPost'


const NewPostScreen = () => {
  return (
    <SafeAreaView style={{flex:1 , marginTop:StatusBar.currentHeight}}>
      <AddNewPost/>
    </SafeAreaView>
  )
}

export default NewPostScreen