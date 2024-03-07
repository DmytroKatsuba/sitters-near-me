import { ColorValue, FlexStyle } from "react-native";

export type TFlexWrapper = {
  width?: string;
  height?: string;
  flexDirection?: FlexStyle["flexDirection"];
  justify?: FlexStyle["justifyContent"];
  align?: FlexStyle["alignItems"];
  wrap?: FlexStyle["flexWrap"];
  background?: ColorValue;
};

export type TDivider = {
  width?: number;
  height?: number;
  background?: string;
};

export type TItemView = {
  width?: string;
  height?: string;
  border?: string;
  border_color?: string;
  background?: string;
  padding?: string;
  margin?: string;
  radius?: string;
};
