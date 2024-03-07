import React from "react";
import { View, ViewStyle } from "react-native";
import { icons } from "../../assets/svg";

interface IIcon {
  name: keyof typeof icons;
  containerStyle?: ViewStyle;
}

const Icon = ({ name, containerStyle, ...rest }: IIcon) => {
  const IconComponent = icons[name];

  return (
    <View style={containerStyle}>
      <IconComponent {...rest} />
    </View>
  );
};

export default Icon;
