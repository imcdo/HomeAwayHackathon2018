import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, Button } from 'react-native';


export default class Login extends Component {
    render() {
        return(
            <View style = {styles.container}>
                <TextInput
                    placeholder = "email"
                    placeholderTextColor = "rgba(255,255,255,0.7)"
                    returnKeyType = "next"
                    onSubmitEditing = {() => this.passwordInput.focus()}
                    keyboardType = "email-addess"
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    style = {styles.input}
                    />
                <TextInput
                    placeholder = "password"
                    placeholderTextColor = "rgba(255,255,255,0.7)"
                    returnKeyType = "go"
                    secureTextEntrystyle
                    style = {styles.input}
                    ref = {(input) => this.passwordInput = input}
                    />

                <TouchableOpacity style = {styles.buttonContainer}>
                    <Text style = {styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
 
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#00a8ff'
    }
});

//export default Login;