import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 200,
        margin: 10,
    },
    title: {
        color: 'white',
        fontSize: 22,
        margin: 5,
        fontWeight: 'bold',
    },
    belowContainer: {
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#1cd05d',
        height: 40,
        width: 130,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    play: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default styles