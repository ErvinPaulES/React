import React, { Component } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class login extends Component {
    constructor() {
        super();
        this.state = {user:'', pass:''};  
        this.data = null;
    }

    getDataForSend = () => {
        this.data = {user:this.state.user, pass: this.state.pass}
    }

    updateUser = (text) => {
        this.setState({user: text})
    }

    updatePass = (text) => {
        this.setState({pass: text})
    }

    navigateToHome = () => {
        this.getDataForSend();
        console.log(this.data)
        Actions.home(this.data)
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.icon}></View>
                <TextInput
                style={styles.field}
                onChangeText={text => this.updateUser(text)}
                value={this.state.user}/>
                <TextInput
                style={styles.field}
                onChangeText={text => this.updatePass(text)}
                value={this.state.pass}/>
                <Button
                style={styles.button}
                onPress={() => {this.navigateToHome()}}
                title="Login"
                />
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        flex: 0,
        backgroundColor: '#551010',
        width: 300,
        height: 200,
        marginBottom: 40,
    },
    field: {
        flex: 0,
        width: 300,
        height: 40,
        backgroundColor: '#FFFF00',
        marginBottom: 30,
    },
    button: {
        flex: 0,
        width: 200,
        height: 40,
        backgroundColor: '#11f',
    }
});
