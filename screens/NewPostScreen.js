import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import AddNewPost from '../components/newPost/AddNewPost'


const NewPostScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1 , marginTop:StatusBar.currentHeight}}>
      <AddNewPost navigation={navigation}/>
    </SafeAreaView>
  )
}

export default NewPostScreen