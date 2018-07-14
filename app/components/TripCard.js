import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


export default class TripCard extends Component {
    render() {
        return(
            <View style={styles.card}>
            <Text style={styles.header}>Name : {this.props.person.name}</Text>
                <View style={styles.body}>
                    <Image source={this.props.person.pic}/>
                    <View>
                        <Text>Description</Text>
                        <Text></Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles =  StyleSheet.create({
    card : {
        backgroundColor: '#ADD8E6',
        alignItems: 'center',
        flex: 1, 
        margin : 10,
        width : '100%'
        
    },
    body : {
        flex : 5,
    },
});