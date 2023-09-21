import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
    },
    rightContainer: {
        justifyContent: 'space-around',
        marginLeft: 12
    },
    image: {
        height: 75,
        width: 75
    },
    title: {
        color: 'white',
        fontSize: 22,
    },
    artist: {
        color: 'grey',
        fontSize: 16
    }
})

export default styles