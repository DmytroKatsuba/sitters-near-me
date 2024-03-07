import React from "react";
import { View } from "react-native";
import Icon from "../icon";
import { useNavigation } from "@react-navigation/native";
import { icons } from "../../assets/svg";
import { FlexWrapper, TitleSemiBold, Touchable } from "../styled";

export type THeader = {
  title: string;
  iconLeft?: keyof typeof icons;
  iconRight?: keyof typeof icons;
  onPressRight?: () => void;
};

export const Header = ({
  title,
  iconLeft,
  iconRight,
  onPressRight,
}: THeader) => {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();
  return (
    <FlexWrapper height="60px" flexDirection="row" justify="space-between">
      {iconLeft ? (
        <Touchable onPress={goBack}>
          <Icon
            name={iconLeft}
            containerStyle={{ transform: [{ rotate: "180deg" }] }}
          />
        </Touchable>
      ) : (
        <Touchable />
      )}
      <TitleSemiBold>{title}</TitleSemiBold>
      {iconRight ? (
        <Touchable onPress={onPressRight}>
          <Icon name={iconRight} />
        </Touchable>
      ) : (
        <Touchable />
      )}
    </FlexWrapper>
  );
};
