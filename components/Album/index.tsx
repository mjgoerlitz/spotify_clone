import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { AlbumType } from '../../types'

export type AlbumProps = {
    album: AlbumType,
}

const Album = (props : AlbumProps) => {
    const navigation = useNavigation();

    const onPress = () => {
        // console.warn(`Album pressed: ${props.album.artistsHeadline}`);
        // navigation.navigate('Modal');
        navigation.navigate('TabFour', {key: 'djdj'});
    }
    
    return (
        <TouchableWithoutFeedback
            onPress={onPress}
        >
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: props.album.imageUri}}/>
                <Text style={styles.text}>{props.album.artistsHeadline}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
    
}

export default Album;