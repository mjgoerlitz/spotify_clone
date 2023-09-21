import React from "react";
import { View, FlatList, Text } from "react-native";
import { AlbumType } from "../../types";
import Album from "../Album";
import styles from "./styles";

export type AlbumCategoryProps = {
    title: string,
    albums: AlbumType[]
}

const AlbumCategory = (props : AlbumCategoryProps) => (
    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <FlatList 
            data={props.albums}
            renderItem={({item}) => <Album album={item}/>}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            horizontal
        />
    </View>
)

export default AlbumCategory;