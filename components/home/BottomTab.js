import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

export const bottomTabIcons = [
  {
    name: "Home",
    inactive: "https://img.icons8.com/?size=512&id=i6fZC6wuprSu&format=png",
    active: "https://img.icons8.com/?size=512&id=1iF9PyJ2Thzo&format=png",
  },
  {
    name: "Search",
    inactive: "https://img.icons8.com/?size=512&id=132&format=png",
    active: "https://img.icons8.com/?size=512&id=7695&format=png",
  },
  {
    name: "Reels",
    inactive: "https://img.icons8.com/?size=512&id=PxI9IPCyBAOD&format=png",
    active: "https://img.icons8.com/?size=512&id=YoIaSvIehcuI&format=png",
  },
  {
    name: "Shop",
    inactive: "https://img.icons8.com/?size=512&id=R1xTRaOJvxmB&format=png",
    active: "https://img.icons8.com/?size=512&id=NoaxhJVagkPA&format=png",
  },
  {
    name: "Profile",
    inactive:
      "https://i.pinimg.com/originals/01/17/20/011720703d78d60fccf9f79821e14159.jpg",
    active: "https://i.pinimg.com/originals/01/17/20/011720703d78d60fccf9f79821e14159.jpg",
  },
];

const BottomTab = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image source={{ uri: activeTab == icon.name ? icon.active : icon.inactive }} 
      style={[styles.icon, icon.name == "Profile" ? styles.profilePic() : null,
      activeTab == "Profile" && icon.name == activeTab ? styles.profilePic(activeTab) : null
      ]} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
        <Divider color="black" width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position:'absolute',
    width:'100%',
    bottom:'0%',
    zIndex:999,
    backgroundColor: '#fff'
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  profilePic: (activeTab = '') => ({
    borderRadius:50,
    borderColor:'#ff8501',
    borderWidth: activeTab == "Profile" ? 2 : 0
  })
});

export default BottomTab;
