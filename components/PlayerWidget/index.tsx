import React, { useEffect, useState } from "react";
import { Text, Image, View, TouchableOpacity } from 'react-native'
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Audio} from 'expo-av'
import { Sound } from "expo-av/build/Audio";

import { SongType } from "../../types";

import styles from "./styles";

const song = {
    id: '1',
    uri: 'https://not-just-trash.s3-eu-west-1.amazonaws.com/WhatsApp+Audio+2020-09-22+at+14.20.25.mp4',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'Song Title',
    artist: 'Song Artist',
}

const PlayerWidget = () => {

    const [currSound, setSound] = useState<Sound|null>(null);

    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const playCurrentSong = async () => {
        console.log("Loading song");
        const { sound } = await Sound.createAsync(
            {uri: song.uri},
            {shouldPlay: true},
        )
        
        setSound(sound);
        
        console.log('Playng Sound');
        await sound.playAsync();
    }

    if (currSound) {
        const unloadAsync = async () => {
            await currSound.unloadAsync()
        }
        unloadAsync
    }

    useEffect(() => {
        playCurrentSong;
      }, [currSound])

    const onPlayPausePress = async () => {
        if (!currSound) {
            return;
        }
        if (isPlaying) {
            await currSound.stopAsync();
        } else {
            await currSound.playAsync();
        }
    }

    return (
        <View style={styles.container}>
            <Image source={{uri: song.imageUri}} style={styles.image}/>
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{song.title}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
                <AntDesign name="hearto" size={30} style={styles.icon}/>
                <TouchableOpacity onPress={onPlayPausePress}>
                    <FontAwesome name="play" size={30} style={styles.icon}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PlayerWidget;