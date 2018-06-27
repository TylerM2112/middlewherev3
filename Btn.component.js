import React, { Component } from 'react';
import { TouchableOpacity, View, Text, } from 'react-native';

export default class Btn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textStyle: {
        color: 'white',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10
      },
      text: props.text || 'PASS TEXT PROPS YOU IDIOT!',
      onPress: props.onPress,
      disabled: props.disabled || false,
      btnStyle: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: props.disabled ? 'grey' : props.backgroundColor || 'yellow',
        borderRadius: 10,
      }
    }
  }
  render() {
    return (
    <TouchableOpacity
      style={this.state.btnStyle}
      onPress={() => this.state.onPress()}
      disabled={this.state.disabled}
      accessibilityLabel={this.state.text}
    >
      <Text style={this.state.textStyle}>{this.state.text}</Text>
    </TouchableOpacity>
    );
  }
}
