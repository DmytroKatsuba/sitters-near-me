import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TSitter } from "../hooks/useSittersList";
import { useNavigation } from "@react-navigation/native";
import { TRootStack, ERootStack } from "../../../navigation/config";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Container, RowContainer, StyledImage } from "./styled";
import { Body, TitleSemiBold } from "../../../components";

export const SitterCard: FC<{ data: TSitter }> = ({ data }) => {
  const navigation = useNavigation<NativeStackNavigationProp<TRootStack>>();

  const goDetails = () =>
    navigation.navigate(ERootStack.SitterDetails, { data });

  return (
    <TouchableOpacity onPress={goDetails}>
      <Container>
        <RowContainer>
          <StyledImage source={{ uri: data.profilePhotoURL }} />
          <View style={styles.margin}>
            <TitleSemiBold>{data.firstName}</TitleSemiBold>
            <Body>rating: {data.rating}</Body>
          </View>
        </RowContainer>
        <Text numberOfLines={2}>{data.bio}</Text>
      </Container>
    </TouchableOpacity>
  );
};

const styles = {
  margin: { marginLeft: 10 },
};
