import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { USERS } from '../../data/Users'


const Stories = () => {
  return (
    <View style={{marginBottom:13}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
        <View key={index} style={{alignItems: 'center'}}>
            <Image source={{uri: story.image}} style={styles.story}/>
            <Text style={styles.Name}>{
              story.user.length > 11 ? story.user.slice(0,10).toLowerCase() +'...' : story.user.toLocaleLowerCase()
            }</Text>
        </View>
        ))}
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  story:{
    width:70,
    height:70,
    borderRadius:50,
    borderWidth:3,
    marginLeft:10,
    borderColor: '#ff8501'
  },
  Name:{
    color: 'black'
  }
})
export default Stories