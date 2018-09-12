import React from 'react';
import { StyleSheet, Image,FlatList, View} from 'react-native';
import {Container, Button,Body,Title,Right,Header,Left} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'react-native-axios'

export function getImagesURIS() {
    var url =
      "https://public-api.wordpress.com/rest/v1.1/sites/rutacincohn.com/posts/";
    var res = [];
  
    return axios.get(url).then(function(response) {
      for (const post of response.data.posts) {
        var keys = post.attachments.keys(o);
        for (const key of keys) {
          res.push(post.attachments[key].URL);
        }
      }
      return res;
    });
  }

export default class ScreenA extends React.Component {
    render(){
        return(
            <Container>
                <Header>
                <Left>
                    <Button transparent>
                    <Icon name='ios-menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Galerias</Title>
                </Body>
                </Header>
                <FlatList
                    data={this.getImagesURIS}
                    renderItem={({ item }) => (
                        <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                        style={{width: 400, height: 400}} />
                    )}
                    keyExtractor={(item, index) => item.id}
                    style={{ flex: 1, marginTop: 20, width: "100%" }}
                />
                
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
  });