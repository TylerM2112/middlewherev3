import React, { Component } from 'react';
import {  View, Text, TouchableHighlight, Modal, TextInput } from 'react-native';

export default class Modal2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStyle: {
        position: "absolute",
        top: 22,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "black",
        // width: "100%",
        // height: "100%",
      },
      textStyle: {
        color: "white",
      },
      rawInputs: props.inputs || 'PASS INPUTS',
      inputs: {}
    }
  }

  componentDidMount() {
    let nameObj = {};

    this.props.inputs.map(e => {
      nameObj[e.name] = ''
    });

    this.setState({ inputs: nameObj }, () => console.log(this.state))
  }
  
  //ADD ONCHANGE FOR EACH TEXT INPUT
  //ADD A MISCONFIGURE IF RAWINPUTS === 'STRING'
  //MOVE STYLES OF TEXTINPUT INTO STATE
  //REFORMAT CODE BC THIS LOOKS LIKE SHIT
  makeInput() {
    let rawInputs = this.state.rawInputs
    let nameObj = {};
    if (typeof rawInputs === 'string') { return; }

    let inputs = rawInputs.map((e, i) => {
      switch (e.type) {
        case 'text':
          nameObj[e.name] = '';

          return (
            <TextInput key={i}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, color: 'white', backgroundColor: 'white' }} />
          )
          break;
        
        case 'number':
          nameObj[e.name] = '';
          return (
            <TextInput
              key={i}
              style={{ height: 10, borderColor: 'gray', borderWidth: 1, color: 'white', backgroundColor: 'white' }}
              keyboardType =  'numeric'
            />
          )
          break;
        default:
          return;
      }

    });
    
    return inputs;
   }
   render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={this.state.modalStyle}>
            <View>
              <Text
                style={this.state.textStyle}
              >
                Hello World!</Text>
              {this.makeInput()}
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
