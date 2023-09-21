import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 39,
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'row',
        margin: 10,
    },
    rightContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 12
    },
    image: {
        height: 75,
        width: 75
    },
    title: {
        color: 'black',
        fontSize: 16,
        marginRight: 5
    },
    artist: {
        color: 'grey',
        fontSize: 16,
        marginLeft: 5
    },
    icon: {
        marginLeft: 20
    }
})

export default styles