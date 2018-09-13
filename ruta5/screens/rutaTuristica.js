import React from 'react';
import { StyleSheet, Text, WebView, ScrollView, Dimensions } from 'react-native';
import {Container, Button,Body,Title,Right,Header,Left} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';



export default class rutaTuristica extends React.Component {
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
                    <Title>Ruta Turistica</Title>
                </Body>
                </Header>
                <WebView source={{uri: 'https://rutacincohn.com/category/sin-categoria/ruta-turistica/ruta-turistica-ruta-turistica/'}}/>
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