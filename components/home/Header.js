import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { View, Text , Image, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar} from 'react-native'
import React from 'react' 
import { Colors } from 'react-native/Libraries/NewAppScreen'


const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
      <Image 
      style={styles.logo} 
      source={require('../../assets/logo.png')} 
      />
      </TouchableOpacity>
    <View style={styles.iconContainer}>
     <TouchableOpacity>
      <Image source={require('../../assets/iconAdd.png')}
      style={styles.icon}
        />
     </TouchableOpacity>
     <TouchableOpacity>
      <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png'}}
      style={styles.icon}
        />
     </TouchableOpacity>
     <TouchableOpacity>
      <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077047.png'}}
      style={styles.icon}
        />
     </TouchableOpacity>
    
    </View>
    
    
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal:20
  },
  iconContainer:{
    flexDirection: 'row',
  },
  logo:{
    width: 150,
    height: 50,
    resizeMode: 'contain', 
    //top: 40,
  },
  icon:{
    width:25,
    height:25,
    marginLeft: 10,
    resizeMode:'contain',
    //top: 40,
    paddingHorizontal: 10
  },
})

export default Header
SafeAreaView