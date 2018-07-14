import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class Card extends Component {
    render() {
        return(
            <View>
            <Text>Name : {this.props.person.name}</Text>
                <View>
                    <Button 
                        title='Yep'
                        className='Yep'
                        //style={styles.yep}
                        onPress={this.props.yepPress}
                    >
                        Partner
                    </Button>
                    <Button
                        title='Nope'
                        className='Nope'
                        //style={styles.nope}
                        onPress={this.props.nopePress}
                    >
                        Don't Partner
                    </Button>
                </View>
            </View>
        );
    
        const styles =  StyleSheet.create({
            card : {
                backgroundColor: 'blue',
                alignItems: 'center',
            },
            bottomBar : {

            }
        });
    }
}

//export default Card;