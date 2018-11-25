import { StyleSheet } from 'react-native';

export default {
    container: {
        flex: 1,
        background: 'red',
    },
    heroBanner: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 400,
        backgroundColor: '#4AD883',
    },
    subTitle: {
        flex: 1,
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
    midContent: {
        height: 115,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logoContainer: {
        paddingBottom: 15,
        paddingTop: 15,
    },
    formQuery: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
    },
    toggleCategory: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    titleBlock: {
        paddingLeft: 15,
        fontSize: 15,
    },
    criteria: {
        justifyContent: 'flex-start',
        height: 715,
        width: "100%",
    },
    checkboxArea: {
        justifyContent: 'flex-start',
        width: "70%",
        height: 300,
    },
    checkBox: {
        paddingTop: 5,
        paddingBottom: 5,
        height: 50,
        width: "100%",
    },
    explain: {
        fontSize: 10,
        marginLeft: 70,
    }
}