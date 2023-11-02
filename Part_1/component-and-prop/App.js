import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

/*
 * Header
 * MyProfile
 * Division
 * FriendSection
 * FriendList
 */
const Header = (props) => {
  return <Text>{props.title}</Text>;
};
const MyProfile = () => {
  return (
    <Profile
      name="jinu"
      uri="https://blog.kakaocdn.net/dn/Wy1cc/btq97nEFnVG/ke7m2EqZVuhjZosiW8q2Z1/img.jpg"
      profileSize={40}
    />
  );
};
const Division = () => {
  return <Text>Division</Text>;
};
const FriendSection = () => {
  return <Text>FriendSection</Text>;
};
const FriendList = () => {
  return (
    <View>
      <Profile
        name="dog"
        uri="https://image.van-go.co.kr/place_main/2022/04/04/12217/035e1737735049018a2ed2964dda596c_750S.jpg"
        profileSize={30}
      />
      <Profile
        name="cat"
        uri="https://blog.kakaocdn.net/dn/Wy1cc/btq97nEFnVG/ke7m2EqZVuhjZosiW8q2Z1/img.jpg"
        profileSize={30}
      />
      <Profile
        name="dog2"
        uri="https://blog.kakaocdn.net/dn/Wy1cc/btq97nEFnVG/ke7m2EqZVuhjZosiW8q2Z1/img.jpg"
        profileSize={30}
      />
      <Profile
        name="cat2"
        uri="https://blog.kakaocdn.net/dn/Wy1cc/btq97nEFnVG/ke7m2EqZVuhjZosiW8q2Z1/img.jpg"
        profileSize={30}
      />
    </View>
  );
};
// 함수형 Component
const Profile = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{
          uri: props.uri,
        }}
        style={{
          width: props.profileSize,
          height: props.profileSize,
        }}
      />
      <Text>{props.name}</Text>
    </View>
  );
};
// Class 형 Component
// class Profile extends React.Component {
//   render() {
//     return (
//       <View style={{ flexDirection: "row" }}>
//         <Image
//           source={{
//             uri: this.props.uri,
//           }}
//           style={{
//             width: this.props.profileSize,
//             height: this.props.profileSize,
//           }}
//         />
//         <Text>{this.props.name}</Text>
//       </View>
//     );
//   }
// }

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="친구" />
      <MyProfile />
      <Division />
      <FriendSection />
      <FriendList />
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
