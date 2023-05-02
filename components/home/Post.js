import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
const Post = ({Post}) => {
  return (
    <View style={{ marginBottom: 30}}>
      <Divider width={1} orientation='vertical'/>
      <Text>Post</Text>
    </View>
  )
}

export default Post