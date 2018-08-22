import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

import { DrawerNav } from './src/navigation/DrawerNav';

export default class App extends React.Component {
  render() {
    return (
      <DrawerNav />
    );
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
