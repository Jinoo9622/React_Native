import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

const InputBox = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        style={{ borderBottomWidth: 1, width: 200 }}
        placeholder={props.placeholder}
      />
      <Button title="초기화" onPress={props.onReset} />
    </View>
  );
};

// custom hook 생성 ('use' prefix)
const useInput = (initailValue) => {
  const [value, setValue] = useState(initailValue);
  const resetValue = () => setValue(initailValue);

  return {
    value,
    setValue,
    resetValue,
  };
};

const CustomHook = () => {
  // const [name, setName] = useState("");
  // ==
  // const output = useInput("");
  // const name = output.value;
  // const setName = output.setValue;
  // const resetName = output.resetValue;
  // ==
  const {
    value: name,
    setValue: setName,
    resetValue: resetName,
  } = useInput("");

  const { value: age, setValue: setAge, resetValue: resetAge } = useInput("");

  const {
    value: city,
    setValue: setCity,
    resetValue: resetCity,
  } = useInput("");

  // onChangeText={(v) => {
  //   setName(v);
  // }} == onChangeText={setName}
  return (
    <View>
      <InputBox
        value={name}
        onChangeText={setName}
        placeholder="이름을 입력해 주세요"
        onReset={resetName}
      />
      <InputBox
        value={age}
        onChangeText={setAge}
        placeholder="나이를 입력해 주세요"
        onReset={resetAge}
      />
      <InputBox
        value={city}
        onChangeText={setCity}
        placeholder="사는 곳을 입력해 주세요"
        onReset={resetCity}
      />
    </View>
  );
};

export default CustomHook;
