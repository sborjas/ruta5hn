import React from "react";
import { StyleSheet, Image, FlatList } from "react-native";
import { Container, Button, Body, Title, Header, Left } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "react-native-axios";

export default class ScreenC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    };
  }

  getImagesURIS = () => {
    var url =
      "https://public-api.wordpress.com/rest/v1.1/sites/rutacincohn.com/posts/";
    var res = [];

    return axios.get(url).then(function(response) {
      for (const post of response.data.posts) {
        var keys = Object.keys(post.attachments);
        for (const key of keys) {
          res.push(post.attachments[key]);
        }
      }
      return res;
    });
  };

  componentWillMount = () => {
    this.getImagesURIS().then(
      function(data) {
        this.setState(function() {
          return { urls: data };
        });
      }.bind(this)
    );
  };

  render() {
    return (
      <Container>
        <Header style={styles.headerStyle}>
          <Left>
            <Button transparent>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Galerias</Title>
          </Body>
        </Header>
        <FlatList
          data={this.state.urls}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item.URL }}
              style={{ width: 180, height: 180 }}
            />
          )}
          style={{ flex: 1, marginTop: 20, width: "100%" }}
          keyExtractor={(item, index) => item.ID}
          horizontal={false}
          numColumns={2}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center"
  },
  headerStyle: {
    backgroundColor: "#082EAF"
  }
});