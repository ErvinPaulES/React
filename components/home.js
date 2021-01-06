import React, {Component} from 'react';
import {Text, View, StyleSheet } from 'react-native';

export default class Home extends Component<Props> {

    render () {
        return (
            <View style={styles.container}>
                <Text>el usuario es: {this.props.user}</Text>
                <Text>el password es: {this.props.pass}</Text>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    }
});