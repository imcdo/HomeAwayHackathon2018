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
            <TripCard 
                    person={this.props.person}
                />
                <View style={styles.bottomBar}>
                    <Button 
                        title='Yep'
                        onPress={this.props.yepPress}
                    >
                        Partner
                    </Button>
                    <Button
                        title='Nope'
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
router : {
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
    height : 20,
    flex : 1,
    flexDirection: "horizontal"
}
});