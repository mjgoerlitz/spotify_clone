// need to consider how to change out for different albums

import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import { API, graphqlOperation } from 'aws-amplify'

import AlbumHeader from '../components/AlbumHeader';
import SongListItem from '../components/SongListItem';

import { getAlbumDetails } from '../src/graphql/queries'

export default function ModalScreen() {
  const route = useRoute();
  const albumId = route.params.id;

  const [album, setAlbum] = useState(null);

  useEffect(() => {
    console.log(albumId);

    const fetchAlbumDetails =async () => {
      try {
        const data = await API.graphql(graphqlOperation(getAlbumDetails, {
          id: albumId
        }))

        setAlbum(data.data.getAlbumDetails)
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }
  }, [])

  if (!album) {
    return <Text>Loading...</Text>
  }

  return (
    <View>
      <FlatList 
        data={album}
        renderItem={({item}) => (
          <SongListItem 
            song={item}
          />
        )}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => <AlbumHeader album={album}/>}
      />
      <SongListItem song={album.songs[0]} />
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

/*import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
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
});*/
