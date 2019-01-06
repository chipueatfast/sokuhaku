import {Dimensions} from 'react-native';

export default {
    main: {
        height: '100%',
        display: 'flex',
    },
    bannerBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    overlayBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'repeat',
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    float: {
        height: 1000,
        position: 'absolute',
        zIndex: 9999,
    },
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
        marginTop: 25,
        marginBottom: 8,
        paddingLeft: 15,
        fontSize: 15,
    },
    criteria: {
        justifyContent: 'flex-start',
        width: "100%",
    },
    checkboxArea: {
        justifyContent: 'flex-start',
        width: "70%",
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
    },
    footer: {
        height: 30,
    }
};
