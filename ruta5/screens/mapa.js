import React from 'react';
import { StyleSheet, Text, WebView, ScrollView, Dimensions } from 'react-native';
import {Container, Button,Body,Title,Right,Header,Left} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import coordinates from "./Coordinates";
import { MapView } from "expo";



export default class mapa extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //   markers: coordinates
        // };
      }
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
                    <Title>Restaurantes Hondureños</Title>
                </Body>
                </Header>
                <Title style={{color:'black'}}>Ubicaciones de nuestras comidas Tipicas</Title>
                <MapView
                    style={styles.map_container}
                    initialRegion={{
                    latitude: 15.478512521637937,
                    longitude: -88.03504586219789,
                    latitudeDelta: 60,
                    longitudeDelta: 80
                    }}
                >
                    {coordinates.map(restaurant => (
                    <MapView.Marker
                        key={restaurant.key}
                        title={restaurant.title}
                        coordinate={restaurant.coordinate}
                    />
                    ))}
                </MapView>


                

            </Container>      
            
            
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerStyle: {
        backgroundColor: '#082EAF'
    },
    map_container: {
        alignSelf: "stretch",
        flex: 1
      }
  });