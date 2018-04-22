import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CoinDetailScreen extends React.Component {

    static navigationOptions = {
        title: 'Coin Detail'
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Coin Detail Screen</Text>
            </View>
        );
    }
}