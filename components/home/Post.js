import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
const Post = ({post}) => {
  return (
    <View style={{ marginBottom: 30}}>
      <Divider width={1} orientation='vertical'  />
      
      <PostHeader post={post} />
    </View>
  )
}

const PostHeader =({post}) =>{
  <View 
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin:5,
      alignItems: 'center',
      }} 
  >
      <View>
        <Image source={{ uri: post.profile_picture }} style={styles.story} />
        <Text></Text>
      </View>
  </View>
}
const styles = StyleSheet.create({
  story:{
    width:35,
    height:35,
    borderRadius:50,
    borderWidth:1.6,
    marginLeft:6,
    borderColor: '#ff8501'
  },
})


export default Post