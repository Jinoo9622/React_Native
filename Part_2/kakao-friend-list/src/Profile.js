import { Image, View, Text } from "react-native";
import Margin from "./Margin";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
  background-color: #fff;
`;
const ProfileImage = styled.Image`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size * 0.4}px;
`;
const TextContainer = styled.View`
  justify-content: center;
  margin-left: 10px;
`;
const NameText = styled.Text`
  font-weight: ${(props) => (props.isMyProfile ? "bold" : "normal")};
  font-size: ${(props) => (props.isMyProfile ? 16 : 14)}px;
`;
const IntroductionText = styled.Text`
  font-size: ${(props) => (props.isMyProfile ? 12 : 11)}px;
  color: gray;
`;

export default ({ uri, name, introduction, isMyProfile }) => {
  const size = isMyProfile ? 50 : 40;
  return (
    <Container>
      <ProfileImage source={{ uri: uri }} size={size} />
      <TextContainer>
        <NameText isMyProfile={isMyProfile}>{name}</NameText>
        {!!introduction && (
          <View>
            <Margin height={isMyProfile ? 6 : 2} />
            <IntroductionText>{introduction}</IntroductionText>
          </View>
        )}
      </TextContainer>
    </Container>
  );
};
