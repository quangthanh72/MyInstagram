import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import FormikPostUploader from "./FormikPostUploader";

const AddNewPost = () => {
  return (
    <View style={styles.container}>
        <Header />
        <FormikPostUploader/>
    </View>
  );
};
const Header = () => (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <Image
          source={{
            uri: "https://img.icons8.com/?size=512&id=1806&format=png",
          }}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>NEW POST</Text>
      <Text></Text>
    </View>
)
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontWeight:'700',
    fontSize:20,
    marginRight: 27.5
  },
});
export default AddNewPost;
