import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { USERS } from '../../data/Users'

const Stories = () => {
  return (
    <View style={{marginBottom:13}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
        <Image source={{ur: story.image}}
        style={styles.story}
        />
        ))}
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  story:{

  }
})
export default Stories