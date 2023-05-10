import { View, Text, Image, StyleSheet, StatusBar} from "react-native";
import React from "react";
import SignupForm from "../components/SignUp/SignupForm";

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
          <SignupForm navigation={navigation}/>
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
