import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Button, Image, Alert } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props); 

    this.state = {
      text1: '',
      text2: ''
    }
  }

  changeText1(text1){
    this.setState({text1});
  }
  changeText2(text2){
    this.setState({text2});
  }
  mostrarAlerta = () => {
    Alert.alert(this.state.text1 + '\n' + this.state.text2);
  }
  render(){
    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={require('./img/el-adviento-una-preparacion-para-la-navidad.jpg')} />
        <TextInput style={styles.field} value={this.state.text1} onChangeText = {(text1) => this.changeText1(text1)}></TextInput>
        <TextInput style={styles.field} value={this.state.text2} onChangeText = {(text2) => this.changeText2(text2)}></TextInput>
        <Button style={styles.button} title= 'Presionar' onPress={this.mostrarAlerta}/>
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
