import React from "react";
import { View, Text, Button } from "react-native";

class Component extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("didMount");
  }

  // functional component와 달리, 바뀌기 이전 값이 넘어옴
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <View>
        <Text>You clicked {this.state.count} times</Text>
        <Button
          title="Click me"
          onPress={() => this.setState({ count: this.state.count + 1 })}
        />
      </View>
    );
  }
}

export default Component;
