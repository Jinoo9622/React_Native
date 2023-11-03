import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import StateWithClassComponent from "./StateWithClassComponent";
import StateWithFuctionalComponent from "./StateWithFuctionalComponent";
import UseEffetWithClassComponent from "./UseEffectWithClassComponent";
import UseEffetWithFunctionalcomponent from "./UseEffectWithFunctionalComponent";
import { useState } from "react";
import CustomHook from "./CustomHook";

export default function App() {
  const [isTrue, setIsTrue] = useState(true);

  return (
    <View style={styles.container}>
      {/* <StateWithClassComponent /> */}
      {/* <StateWithFuctionalComponent /> */}
      {/* {isTrue ? <UseEffetWithClassComponent /> : null} */}
      {/* {isTrue && <UseEffetWithClassComponent />} */}
      {/* <UseEffetWithFunctionalcomponent /> */}
      {/* <Button title="toggle" onPress={() => setIsTrue(!isTrue)} /> */}

      <CustomHook />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
