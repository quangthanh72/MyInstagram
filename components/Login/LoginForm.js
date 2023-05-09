import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

const LoginForm = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor="#444"
          placeholder="Phone number, username or email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          style={{fontSize:18}}
        />
      </View>
      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor="#444"
          placeholder="Password"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          style={{fontSize:18}}
        />
      </View>
      <View style={{alignItems:'flex-end',marginBottom:30}}>
        <Text style={{color:'#6BB0F5'}}>Forgot password?</Text>
      </View>
      <Pressable titleSize={20} style={styles.button} onPress={() => {console.log('you clicked me!')} }>
        <Text style={{color:'white',fontWeight:500,fontSize:20,}}>Log In</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    margin:10,
    marginTop: 80,
  },

  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
  },
  button:{
    backgroundColor:"#0096F6",
    alignItems: 'center',
    justifyContent:'center',
    minHeight:42,
    borderRadius:4,
  },
});

export default LoginForm;
