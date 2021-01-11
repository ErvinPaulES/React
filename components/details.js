import React, { Component} from 'react';
import { View,StyleSheet } from 'react-native';
import ArtistBox from './ArtistBox';

export default class details extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const artist = this.props.data
        return (
            <View style={styles.container}>
                <ArtistBox
                artist={artist}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
})