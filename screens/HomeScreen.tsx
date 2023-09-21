import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import Album from '../components/Album/index';
import AlbumCategory from '../components/AlbumCategory';
import albumCategories from '../data/albumCategories';

import { API, graphqlOperation } from 'aws-amplify'

import { listAlbumCategories } from '../src/graphql/queries';

import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchAlbumCategories = async () => {
      try {
        const data = await  API.graphql(graphqlOperation(listAlbumCategories))
        setCategories(data.data.listAlbumCategories.items)
      } catch (e) {
        console.log(e);
      }
    }
  }, [])

  return (
    <View style={styles.container}>
      <FlatList 
        data={categories}
        renderItem={({item}) => (
          <AlbumCategory 
            title={item.title}
            albums={item.albums.items}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

// <EditScreenInfo path="/screens/TabOneScreen.tsx" /> previously in export function

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
