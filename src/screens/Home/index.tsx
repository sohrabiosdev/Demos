import * as React from 'react';
import {Component} from 'react';
import {Button, Text, View} from 'react-native';

interface Props {
  navigation: any;
}

interface State {
  loading?: boolean;
  showLogin?: boolean;
}

export default class Home extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      showLogin: false,
    };
  }

  componentDidMount() {
    this.showLogin();
  }

  showLogin() {
    this.setState({showLogin: true});
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      </View>
    );
  }
}
