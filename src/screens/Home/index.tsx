import * as React from 'react';
import { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { setUsername } from "../../actions/user";

interface Props {
    navigation: any;
}

interface State {
    loading?: boolean;
    showLogin?: boolean;
    username: string;
}

export default class Home extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            showLogin: false,
            username: "Sohrab"
        };
    }

    componentDidMount() {
        this.showLogin();
    }

    showLogin() {
        this.setState({ showLogin: true });
    }

    setTextInputValue = (text: any) => {
        this.setState({ username: text });
    }

    render() {
        return (
            <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
                <TextInput
                    style={ {
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        paddingHorizontal: 10,
                        marginBottom: 10
                    } }
                    onChangeText={ text => this.setTextInputValue(text) }
                    value={ this.state.username }
                    placeholder="Insert your username!"
                />
                <TouchableOpacity onPress={ () => {
                    setUsername(this.state.username);
                    this.props.navigation.navigate("Details");
                }
                }>
                    <Text> GO </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
