import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


export default class Card extends Component {
    render() {
        return(
            <View style={styles.card}>
            <Text style={styles.header}>Name : {this.props.person.name}</Text>
                <View style={styles.body}>
                    <Image source={this.props.person.pic}/>
                </View>
                <View style={styles.bottomBar}>
                    <Button 
                        title='Yep'
                        className='Yep'
                        style={styles.yep}
                        onPress={this.props.yepPress}
                    >
                        Partner
                    </Button>
                    <Button
                        title='Nope'
                        className='Nope'
                        style={styles.nope}
                        onPress={this.props.nopePress}
                    >
                        Don't Partner
                    </Button>
                </View>
            </View>
        );
    }
}

const styles =  StyleSheet.create({
    card : {
        backgroundColor: 'blue',
        alignItems: 'center',
        flex: 1, 
        margin : 10,
    },
    header : {
        color: 'white',
        alignItems: 'center',
        fontSize: 32,
    },
    body : {
        flex : 5,
    },
    bottomBar : {
        backgroundColor : 'gray',
        height : 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nope : {
        height : 20,
    },
    yep : {
        height : 20,
    }
});
