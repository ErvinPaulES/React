import React, { Component} from 'react';
import { View,StyleSheet } from 'react-native';
import ArtistBox from './ArtistBox';

export default class details extends Component {
    constructor(props) {
        super(props);
        this.state = {artistsData: data}
    }

    render() {
        return (
            <View style={styles.container}>
                <ArtistBox
                name={item.name}
                imageUri={item.image}
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
        justifyContent: 'center',
    },
})