import { View, Text, Image, StyleSheet, StatusBar, TextInput } from "react-native";
import React from "react";
import LoginForm from "../components/Login/LoginForm";

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: "https://img.icons8.com/?size=512&id=Xy10Jcu1L2Su&format=png",
            width: 140,
            height: 140,
          }}
        />
      </View>
      <LoginForm navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    marginTop: StatusBar.currentHeight,
  },
  logoContainer: {
    alignItems:'center',
    marginTop:50
  },
});

export default LoginScreen;
