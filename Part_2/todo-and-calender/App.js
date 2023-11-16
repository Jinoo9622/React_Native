import { useEffect } from "react";
import {
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import dayjs from "dayjs";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Ionicons } from "@expo/vector-icons";

import {
  ITEM_WIDTH,
  bottomSpace,
  getCalendarColumns,
  statusBarHeight,
} from "./src/utils";
import { useCalender } from "./src/hook/use-calender";
import { useTodoList } from "./src/hook/use-todo-list";
import Calender from "./src/Calender";
import Margin from "./src/Margin";
import AddTodoInput from "./src/AddTodoInput";

export default function App() {
  const now = dayjs();
  const {
    selectedDate,
    setSelectedDate,
    isDatePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    subtractOneMonth,
    addOneMonth,
  } = useCalender(now);
  const { todoList, input, setInput, addTodo, removeTodo, toggleTodo } =
    useTodoList(selectedDate);

  const columns = getCalendarColumns(selectedDate);

  const onPressLeftArrow = subtractOneMonth;
  const onPressHeaderDate = showDatePicker;
  const onPressRightArrow = addOneMonth;
  const onPressDate = setSelectedDate;

  useEffect(() => {
    // runPracticeDayjs();
  }, []);
  useEffect(() => {
    console.log(
      "selectedDate: ",
      dayjs(selectedDate).format("YYYY.MM.DD HH:mm:ss")
    );
  }, [selectedDate]);

  const ListHeaderComponent = () => {
    return (
      <View>
        <Calender
          columns={columns}
          selectedDate={selectedDate}
          onPressLeftArrow={onPressLeftArrow}
          onPressHeaderDate={onPressHeaderDate}
          onPressRightArrow={onPressRightArrow}
          onPressDate={onPressDate}
        />
        <Margin height={15} />
        <View
          style={{
            width: 4,
            height: 4,
            borderRadius: 4 / 2,
            backgroundColor: "#a3a3a3",
            alignSelf: "center",
          }}
        />
        <Margin height={15} />
      </View>
    );
  };
  const renderItem = ({ item: todo }) => {
    const isSuccess = todo.isSuccess;
    return (
      <View
        style={{
          flexDirection: "row",
          width: ITEM_WIDTH,
          alignSelf: "center",
          paddingVertical: 10,
          borderBottomWidth: 0.2,
          borderColor: "#a6a6a6",
          // backgroundColor: todo.id % 2 === 0 ? "pink" : "lightblue",
        }}
      >
        <Text style={{ flex: 1, fontSize: 15, color: "#595959" }}>
          {todo.content}
        </Text>
        <Ionicons
          name="ios-checkmark"
          size={17}
          color={isSuccess ? "#595959" : "#bfbfbf"}
        />
      </View>
    );
  };

  const onPressAdd = () => {};

  return (
    // <Pressable /> == <TouchableOpacity activeOpacity={1} />
    <Pressable
      style={styles.container}
      onPress={Keyboard.dismiss}
      // == onPress={() => Keyboard.dismiss()}
    >
      <Image
        source={{
          // 출처: https://kr.freepik.com/free-photo/white-crumpled-paper-texture-for-background_1189772.htm
          uri: "https://img.freepik.com/free-photo/white-crumpled-paper-texture-for-background_1373-159.jpg?w=1060&t=st=1667524235~exp=1667524835~hmac=8a3d988d6c33a32017e280768e1aa4037b1ec8078c98fe21f0ea2ef361aebf2c",
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute", // 선언되는 순서가 중요
        }}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <FlatList
          data={todoList}
          contentContainerStyle={{ paddingTop: statusBarHeight }}
          ListHeaderComponent={ListHeaderComponent}
          renderItem={renderItem}
        />

        <AddTodoInput
          value={input}
          onChangeText={setInput}
          placeholder={`${dayjs(selectedDate).format("MM.D")}에 추가할 TODO`}
          onPressAdd={onPressAdd}
        />
      </KeyboardAvoidingView>

      <Margin height={bottomSpace} />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Pressable>
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
