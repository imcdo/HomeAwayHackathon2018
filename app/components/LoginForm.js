import React, {Component} from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, StatusBar} from 'react-native';

export default class LoginForm extends Component {
    render(){
        return(
            <View style={StyleSheet.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <TextInput 
                    placeholder="email"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                />
                <TextInput
                    placeholder="password"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 12, 
        color: '#FFF',
        paddingHorizontal:10
    },
    buttonContainer: {
        background: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAling: 'center',
        color: '#FFFFFFF', 
        fontWeight: '700'
    }
});