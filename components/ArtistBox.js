import React, { Component } from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';

export default class ArtistBox extends Component {

    render() {
        const {imageUri, name} = this.props.artist

        return (
            <View style={styles.ArtistBox}>
                <Image style={styles.image} src={{uri: imageUri}}></Image>
                <View style={styles.info}>
                    <Text style={styles.name}>{name}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ArtistBox: {
        margin: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowOffset: {
            height: 1,
            width: -2
        },
        elevation: 2
    },
    image: {
        width: 150,
        width: 150
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        fontSize: 20,
        marginTop: 10,
        color: '#333'
    }
})