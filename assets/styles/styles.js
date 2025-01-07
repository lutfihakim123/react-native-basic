import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    card: {
        backgroundColor : 'red',
        padding: 30,
        margin: 30,
    },
    content: {
        backgroundColor: 'yellow',
    },
    merah: {
        backgroundColor : 'red',
        width: 100,
        height: 100,
    },
    biru: {
        backgroundColor : 'blue',
        width: 100,
        height: 70,
    },
    hijau: {
        backgroundColor : 'green',
        width: 100,
        height: 100,
    },
    dynamicCard: {
        backgroundColor : 'red',
        width: 100,
        height: 100,
    },
    wrapperKotak: {
        // flexDirection: 'row',
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    cardBorder: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // example using variable
    // dynamicCard2: (color) => ({
    //     height: 100,
    //     width: 100,
    // })
    header: {
        height: 100,
        borderWidth: 1,
        borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    cardHeader: {
        width: 50,
        height: 50,
        borderWidth: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        // left: 0,
    }
});