import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { useCalculator } from "./use-calculator";

const COLOR = {
  RESULT: "#4e4c51",
  RESET: "#5f5e62",
  OPERATOR: "#f39c29",
  NUM: "#5c5674",
};

const oneBlockWidth = 70;
// Button type: 'reset' | 'operator' | 'num'
const Button = ({ text, onPress, flex, type, isSelected }) => {
  const backgroundColor =
    type === "reset"
      ? COLOR.RESET
      : type === "operator"
      ? COLOR.OPERATOR
      : type === "num"
      ? COLOR.NUM
      : "transparent";
  return (
    <TouchableOpacity
      style={{
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        // paddingV ertical: 10,
        height: 50,
        width: oneBlockWidth * flex,
        borderWidth: isSelected ? 1 : 0.3,
        borderColor: "black",
      }}
      onPress={onPress}
    >
      <Text style={{ color: "white", fontSize: 25 }}>{text}</Text>
    </TouchableOpacity>
  );
};

const ButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;
const InputContainer = styled.View`
  background-color: ${COLOR.RESULT};
  width: ${oneBlockWidth * 4}px;
  min-height: 50px;
  justify-content: center;
  align-items: flex-end;
  /* padding: 5px;  // top, right, bottom, left  */
  padding: 10px 0px; /* top, bottom(vertical) 10px | right, left(horizontal) 0px */
  /* padding: 1px 2px 3px 4px; // top, right, bottom, left */
`;

export default () => {
  const {
    input,
    currentOperator,
    result,
    tempInput,
    tempOperator,
    hasInput,
    onPressNum,
    onPressOperator,
    onPressReset,
  } = useCalculator();

  return (
    // flex: 부모 component로부터 받은 비율을 나눔
    <View style={{ flex: 1, width: 250, justifyContent: "center" }}>
      {/* 개발 환경에서만 노출 */}
      {__DEV__ && (
        <>
          <Text>input: {input}</Text>
          <Text>currentOperator: {currentOperator}</Text>
          <Text>result: {result}</Text>
          <Text>tempInput: {tempInput}</Text>
          <Text>tempOperator: {tempOperator}</Text>
        </>
      )}
      {/* 결과 */}
      <InputContainer>
        <Text style={{ color: "white", fontSize: 35, textAlign: "right" }}>
          {input}
        </Text>
      </InputContainer>

      {/* [AC ~ /] */}
      <ButtonContainer style={{ flexDirection: "row", width: "100%" }}>
        <Button
          type="reset"
          text={hasInput ? "C" : "AC"}
          onPress={onPressReset}
          flex={3}
        />
        <Button
          type="operator"
          text="/"
          onPress={() => onPressOperator("/")}
          flex={1}
          isSelected={currentOperator === "/"}
        />
      </ButtonContainer>

      {/* [7 ~ x] */}
      <ButtonContainer style={{ flexDirection: "row", width: "100%" }}>
        {[7, 8, 9].map((num) => (
          <Button
            key={`num-${num}`}
            type="num"
            text={`${num}`}
            onPress={() => onPressNum(num)}
            flex={1}
          />
        ))}
        {/* == <Button type="num" text="7" onPress={() => null} flex={1} />
        <Button type="num" text="8" onPress={() => null} flex={1} />
        <Button type="num" text="9 " onPress={() => null} flex={1} /> */}
        <Button
          type="operator"
          text="X"
          onPress={() => onPressOperator("*")}
          flex={1}
          isSelected={currentOperator === "*"}
        />
      </ButtonContainer>

      {/* [4 ~ -] */}
      <ButtonContainer style={{ flexDirection: "row", width: "100%" }}>
        {[4, 5, 6].map((num) => (
          <Button
            key={`num-${num}`}
            type="num"
            text={`${num}`}
            onPress={() => onPressNum(num)}
            flex={1}
          />
        ))}
        <Button
          type="operator"
          text="-"
          onPress={() => onPressOperator("-")}
          flex={1}
          isSelected={currentOperator === "-"}
        />
      </ButtonContainer>

      {/* [1 ~ +] */}
      <ButtonContainer style={{ flexDirection: "row", width: "100%" }}>
        {[1, 2, 3].map((num) => (
          <Button
            key={`num-${num}`}
            type="num"
            text={`${num}`}
            onPress={() => onPressNum(num)}
            flex={1}
          />
        ))}
        <Button
          type="operator"
          text="+"
          onPress={() => onPressOperator("+")}
          flex={1}
          isSelected={currentOperator === "+"}
        />
      </ButtonContainer>

      {/* [0 ~ =] */}
      <ButtonContainer style={{ flexDirection: "row", width: "100%" }}>
        <Button type="num" text="0" onPress={() => onPressNum(0)} flex={3} />
        <Button
          type="operator"
          text="= "
          onPress={() => onPressOperator("=")}
          flex={1}
        />
      </ButtonContainer>
    </View>
  );
};
