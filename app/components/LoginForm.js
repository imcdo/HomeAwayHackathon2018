import React, {Component} from 'react';
import { StyleSheet, View, TextInput, Button, TouchableOpacity, StatusBar} from 'react-native';
import TitledInput from './components/TitledInput'; //originally from ./TitledInput
import firebase from 'firebase'; 
import Spinner from './Spinner';

export default class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };
    onLoginPress() {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { this.setState({ error: '', loading: false }); })
            .catch(() => {
                //Login was not successful, let's create a new account
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => { this.setState({ error: '', loading: false }); })
                    .catch(() => {
                        this.setState({ error: 'Authentication failed.', loading: false });
                    });
            });
    }
    renderButtonOrSpinner() {
        if (this.state.loading) {
            return <Spinner />;    
        }
        return <Button onPress={this.onLoginPress.bind(this)} title="Log in" />;
    }
    render(){
        return(
            <View style={StyleSheet.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <TitledInput 
                        label='Email Address'
                        placeholder='you@domain.com'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                />
                <TitledInput 
                        label='Password'
                        autoCorrect={false}
                        placeholder='*******'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                />
                <Button title="Log in" />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default LoginForm; 

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