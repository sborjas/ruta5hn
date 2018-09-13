import React from "react";
import { MapView } from "expo";
import { StyleSheet, View } from "react-native";
import coordinates from "./Coordinates";

export default class ShowMap extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   markers: coordinates
    // };
  }
  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
  map_container: {
    alignSelf: "stretch",
    flex: 1
  }
});
