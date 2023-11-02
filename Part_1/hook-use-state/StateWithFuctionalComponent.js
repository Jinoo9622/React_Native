import React, { useState } from "react";
import { View, Text, Button, Switch, TextInput } from "react-native";

const Component = () => {
  // int, bool, string
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [name, setName] = useState("");

  //   const result = useState(0);
  //   const count = useState[0];
  //   const setCount = useState[1];

  //   const arr = [1, 2, 3];

  //   const first = arr[0];
  //   const second = arr[1];
  //   const third = arr[2];
  //   => const [first, second, third] = arr;

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />

      <Text>----------</Text>
      <Switch
        value={isOn}
        onValueChange={(v) => {
          // 바뀔 값이 넘어옴
          console.log("v", v);
          setIsOn(v);
        }}
      />

      <Text>----------</Text>
      <TextInput
        value={name}
        onChangeText={(v) => {
          console.log("v", v);
          setName(v);
        }}
      />
    </View>
  );
};

export default Component;
