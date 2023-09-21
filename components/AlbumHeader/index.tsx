import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { AlbumType } from '../../types'

export type AlbumHeaderProps = {
    album: AlbumType;
}

import styles from './styles'

const AlbumHeader = (props: AlbumHeaderProps) => {
    const { album } = props

    return (
        <View style={styles.container}>
            <Image source={{uri: album.imageUri}} style={styles.image}/>
            <Text style={styles.title}>{album.name}</Text>
            <View style={styles.belowContainer}>
                <Text style={{color: 'white', marginRight: 5}}>By {album.artistsHeadline}</Text>
                <Text style={{color: 'grey', marginLeft: 5}}>{album.numberOfLikes} Likes</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.play}>PLAY</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

export default AlbumHeader