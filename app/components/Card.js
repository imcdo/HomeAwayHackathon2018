import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class Card extends Component {
    
    constructor(props) {
        super(props);
        const loadingPerson ;
        this.state = {
            person : loadingPerson,
            
        }
    }

    render() {
        return(
            <View style={styles.card}>
                <View style={style.bottomBar}>
                    <Button 
                        className='Yep'
                        style={styles.yep}
                        onPress={this.props.yepPress}
                    >
                        Partner
                    </Button>
                    <Button
                        className='Nope'
                        style={styles.nope}
                        onPress={this.props.nopePress}
                    >
                        Don't Partner
                    </Button>
                </View>
            </View>
        );
    
        const style =  StyleSheet.create({
            card : {
                backgroundColor: blue

            }
        });
    }
}

//export default Card;