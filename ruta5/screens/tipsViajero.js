import React from 'react';
import { StyleSheet, Text, WebView } from 'react-native';
import {Container, Button,Body,Title,Left,Header} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';



export default class tipsViajero extends React.Component {
    render(){
        return(
            <Container>
                <Header style={styles.headerStyle}>
                <Left>
                    
                    <Button transparent onPressOut={console.log('hola')}>
                    <Icon name='ios-menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Tips del Viajero</Title>
                </Body>
                </Header>
                
                <WebView source={{uri: 'https://rutacincohn.com/category/tips-del-viajero/'}}/>
                

            </Container>      
            
            
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerStyle: {
        backgroundColor: '#082EAF'
    }
  });