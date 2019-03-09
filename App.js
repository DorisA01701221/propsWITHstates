import React from 'react';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor (props){
    super(props);

    this.state = {
      firstInput: "",
      lastInput: "",
      stateChanged: false
    }
  }

  displayResult(){
    if((this.state.firstInput !== "") || (this.state.lastInput !== "")){
      this.setState({stateChanged: true});
    }
    else{
      this.setState({stateChanged: false});
    }
  }

  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'stretch'}}>

        <View>
          <Text textAlignVertical={'center'}>Enter your name:</Text>
          <TextInput style={styles.input} textAlignVertical={'center'} onChangeText={(inputValue) => this.setState({firstInput: inputValue})}  />
        </View>

        <View>
          <Text textAlignVertical={'center'}>Enter your last name:</Text>
          <TextInput style={styles.input} textAlignVertical={'center'} onChangeText={(inputValue) => this.setState({lastInput: inputValue})}  />
        </View>

        <View>
          <Button onPress={() => {this.displayResult()}} title="Press Here"  />
        </View>

        <View>
           <Text textAlignVertical={'center'}> {this.state.stateChanged ? this.state.firstInput + this.state.lastInput : "" } </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {

  }
});
