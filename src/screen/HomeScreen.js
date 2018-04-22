import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import axios from 'axios';


const baseImageUrl = 'https://www.cryptocompare.com';

class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Select Coin'
    }

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            coinList: [],
            error: null,
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {

        this.setState({ loading: true })
        axios.get('https://www.cryptocompare.com/api/data/coinlist/')
            .then((response) => {
                const coinListArray = Object.keys(response.data.Data).map(i => response.data.Data[i])

                this.setState({
                    loading: false,
                    coinList: coinListArray
                })
            })
            .catch((err) => {
                this.setState({ error, loading: false });
            })

    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    };

    renderHeader = () => {
        return <SearchBar placeholder="Type Coin Name..." lightTheme round />;
    };

    renderFooter = () => {
        if (!this.state.loading) return null;

        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
            >
                <ActivityIndicator animating size="large" />
            </View>
        );
    };

    render() {
        return (
            <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                <FlatList
                    data={this.state.coinList}
                    renderItem={({ item }) => (
                        <ListItem
                            roundAvatar
                            title={item.Name}
                            subtitle={item.FullName}
                            avatar={{ uri: `${baseImageUrl}${item.ImageUrl}` }}
                            containerStyle={{ borderBottomWidth: 0 }}
                        />
                    )}
                    keyExtractor={item => item.Id}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                />
            </List>
        );
    }
}

export default HomeScreen;