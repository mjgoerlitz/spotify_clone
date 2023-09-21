/*import React from "react";
import { View, Text } from 'react-native'

const AlbumScreen = () => {
    <View>
        <Text style={{color: 'white'}}>Hello from Album Screen</Text>
    </View>
}

export default AlbumScreen;*/

import { StyleSheet, Text, View } from 'react-native';

export default function AlbumScreen() {
  return (
    <View style={styles.container}>
      <Text style={{color: "white"}}>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});