import React from 'react';
import { StyleSheet, Text, WebView } from 'react-native';
import {Container, Button,Body,Title,Right,Header,Left} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';



export default class rutaGas extends React.Component {
    render(){
        return(
            <Container>
                <Header style={styles.headerStyle}>
                <Left>
                    
                    <Button transparent>
                    <Icon name='ios-menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Ruta Gastronomica</Title>
                </Body>
                </Header>
                

                
                <WebView source={{uri: 'https://rutacincohn.com/category/ruta-gastronomica/'}}/>
                

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