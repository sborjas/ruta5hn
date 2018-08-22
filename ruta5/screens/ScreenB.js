import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class ScreenA extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>SCREEN B</Text>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });