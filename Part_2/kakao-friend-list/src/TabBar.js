import { TouchableOpacity, View } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { getBottomSpace } from "react-native-iphone-x-helper";
const bottomSpace = getBottomSpace();

const TabButton = ({
  isSeleted,
  onPress,
  activeIconName,
  inactiveIconName,
  isIconFontisto,
  isIconIonicons,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
      }}
    >
      {isIconFontisto && (
        <Fontisto
          name={isSeleted ? activeIconName : inactiveIconName}
          size={24}
          color="black"
        />
      )}
      {isIconIonicons && (
        <Ionicons
          name={isSeleted ? activeIconName : inactiveIconName}
          size={24}
          color="black"
        />
      )}
    </TouchableOpacity>
  );
};

export default ({ selectedTabIdx, setSelectedTabIdx }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        paddingBottom: bottomSpace,
        borderTopWidth: 0.5,
        borderColor: "grey",
      }}
    >
      <TabButton
        isSeleted={selectedTabIdx == 0}
        onPress={() => setSelectedTabIdx(0)}
        activeIconName={"person"}
        inactiveIconName={"persons"}
        isIconFontisto
      />
      <TabButton
        isSeleted={selectedTabIdx == 1}
        onPress={() => setSelectedTabIdx(1)}
        activeIconName={"chatbubble"}
        inactiveIconName={"chatbubble-outline"}
        isIconIonicons
      />
      <TabButton
        isSeleted={selectedTabIdx == 2}
        onPress={() => setSelectedTabIdx(2)}
        activeIconName={"pricetag"}
        inactiveIconName={"pricetag-outline"}
        isIconIonicons
      />
      <TabButton
        isSeleted={selectedTabIdx == 3}
        onPress={() => setSelectedTabIdx(3)}
        activeIconName={"add-circle"}
        inactiveIconName={"add-circle-outline"}
        isIconIonicons
      />
    </View>
  );
};
