import React from 'react';
import { StyleSheet, Text, WebView, } from 'react-native';
import {Container, Button,Body,Title,Right,Header,Left} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';



export default class empresaExito extends React.Component {
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
                    <Title>Empresas de Exito</Title>
                </Body>
                </Header>
                

                
                <WebView source={{uri: 'https://rutacincohn.com/category/empresa-de-exito/'}}/>
                

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