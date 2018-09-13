
import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground,Header } from 'react-native'
import { white } from 'ansi-colors';

export default class drawerContentComponents extends React.Component {
    
    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

  render() {
    
    return (
        <View style={styles.container}>
           
            <View style={styles.headerContainer}> 
                <Text style={styles.headerText}> Ruta 5, Honduras</Text>              
            </View>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
            />
             
            <View>
                <View style={styles.screenStyle}>
                    <Text style={styles.screenTextStyle} onPress={this.navigateToScreen('ScreenA')}>Acerca de Nosotros</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.screenTextStyle} onPress={this.navigateToScreen('ScreenB')}>Talento Catracho</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.screenTextStyle} onPress={this.navigateToScreen('ScreenC')}>Galerias</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text  style={styles.screenTextStyle} onPress={this.navigateToScreen('tipsViajero')}>Tips del Viajero</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.screenTextStyle} onPress={this.navigateToScreen('rutaGas')}>Ruta Gastronomica</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.screenTextStyle} onPress={this.navigateToScreen('empresaExito')}>Empresas de Exito</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.screenTextStyle} onPress={this.navigateToScreen('extranjeroHon')}>Extranjeros en Honduras</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.screenTextStyle} onPress={this.navigateToScreen('rutaTuristica')}>Ruta Turistica</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.screenTextStyle} onPress={this.navigateToScreen('rutaCultural')}>Ruta Cultural</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.screenTextStyle} onPress={this.navigateToScreen('productosNos')}>Productos Nostalgicos</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.screenTextStyle} onPress={this.navigateToScreen('cartasaEditor')}>Cartas al Editor</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.screenTextStyle} onPress={this.navigateToScreen('mapa')}>Restaurantes Hondureños</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.screenTextStyle} onPress={this.navigateToScreen('Contacto')}>Contacto</Text>
                </View>
            </View>
            
        </View>
    
    )
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor:'#082EAF',
        height: '100%'
    },
    headerContainer: {
        height: 50      
    },
    headerText: {
        color: '#fff8f8',
        paddingLeft: 15,
        fontSize: 19,
        fontWeight: 'bold'
    },
    screenContainer: {
        paddingTop: 20,
        paddingLeft: 5,
        paddingRight: 5,
    },
    screenStyle: {
        height: 30,
        marginTop: 2.5,
        flexDirection: 'row',
        alignItems: 'center',  
        
    },
    screenTextStyle:{
        fontSize: 20,
        marginLeft: 20,
        color: 'white'  
    },
    headerStyle:{
        height: 220,
        backgroundColor: '#082EAF'
    },

});

