import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {DrawerNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HOLA MUNDO!</Text>
      </View>
    );
  }
}


const Menu = DrawerNavigator({

  Home:{
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  }
  
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
