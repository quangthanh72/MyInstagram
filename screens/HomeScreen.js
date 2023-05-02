import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, StyleSheet,StatusBar, ScrollView } from 'react-native'
import React from 'react' 
import Header from '../components/home/Header'
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import { POSTS } from '../data/posts';


const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex:1, marginTop: StatusBar.currentHeight}}>
      <Header/>
      <Stories/>
      <ScrollView>
        {POSTS.map((post,index) => (
        <Post post={post} key={index} />
        ))}
        
      </ScrollView>
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
