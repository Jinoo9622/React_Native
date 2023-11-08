import { ScrollView, View } from "react-native";
import Profile from "./Profile";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Margin from "./Margin";

const bottomSpace = getBottomSpace();

export default (props) => {
  /**
   * Case 1. 삼항연산자
   */
  // return props.isOpend ? (
  //   <ScrollView
  //     showsVerticalScrollIndicator={false}
  //     contentContainerStyle={{ paddingBottom: bottomSpace }}
  //   >
  //     {props.data.map((item, index) => (
  //       // 각각의 item들은 unique한 key가 필요 (최상단 root component에 있어야함)
  //       <View key={index}>
  //         <Profile
  //           uri={item.uri}
  //           name={item.name}
  //           introduction={item.introduction}
  //         />
  //         <Margin height={13} />
  //       </View>
  //     ))}
  //   </ScrollView>
  // ) : null;
  /**
   * Case 2. if문으로 예외처리
   */
  // if (!props.isOpend) return null;
  // return (
  //   <ScrollView
  //     showsVerticalScrollIndicator={false}
  //     contentContainerStyle={{ paddingBottom: bottomSpace }}
  //   >
  //     {props.data.map((item, index) => (
  //       // 각각의 item들은 unique한 key가 필요 (최상단 root component에 있어야함)
  //       <View key={index}>
  //         <Profile
  //           uri={item.uri}
  //           name={item.name}
  //           introduction={item.introduction}
  //         />
  //         <Margin height={13} />
  //       </View>
  //     ))}
  //   </ScrollView>
  // );
  /**
   * Case 3. &&로 처리
   *    - false && 1 = false
   *    - true && 2 = 2
   */
  return (
    props.isOpend && (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: bottomSpace }}
      >
        {props.data.map((item, index) => (
          // 각각의 item들은 unique한 key가 필요 (최상단 root component에 있어야함)
          <View key={index}>
            <Profile
              uri={item.uri}
              name={item.name}
              introduction={item.introduction}
            />
            <Margin height={13} />
          </View>
        ))}
      </ScrollView>
    )
  );
};
