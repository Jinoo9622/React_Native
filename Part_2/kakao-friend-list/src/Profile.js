import { Image, View, Text } from "react-native";
import Margin from "./Margin";

export default ({ uri, name, introduction, isMyProfile }) => {
  const size = isMyProfile ? 50 : 40;
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{ uri: uri }}
        style={{ width: size, height: size, borderRadius: size * 0.4 }}
      />
      <View style={{ justifyContent: "center", marginLeft: 10 }}>
        <Text
          style={{
            fontWeight: isMyProfile ? "bold" : undefined,
            fontSize: isMyProfile ? 16 : 14,
          }}
        >
          {name}
        </Text>
        {!!introduction && (
          <View>
            <Margin height={isMyProfile ? 6 : 2} />
            <Text style={{ fontSize: isMyProfile ? 12 : 11, color: "grey" }}>
              {introduction}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
