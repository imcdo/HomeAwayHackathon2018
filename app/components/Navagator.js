import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import TripCard from "./TripCard"

export default class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>
                <View style={styles.bottomBar}>
                    <Button 
                        title='Yep'
                        style={styles.yep}
                        onPress={this.props.yepPress}
                    >
                        Partner
                    </Button>
                        <TripCard 
                            person={this.props.person}
                        />
                    <Button
                        title='Nope'
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

const styles = StyleSheet.create({
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
}
});