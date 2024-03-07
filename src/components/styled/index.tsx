import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styled from "styled-components";
import { TDivider, TFlexWrapper, TItemView } from "./types";
import { EColors } from "./colors";

export const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${EColors.white};
`;
export const ViewContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${EColors.white};
`;

export const Container = styled(View)`
  background-color: ${EColors.white};
  padding: 20px;
  align-items: center;
  height: auto;
`;

export const FlexWrapper = styled(View)<TFlexWrapper>`
  display: flex;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};
  background-color: ${({ background }) => String(background) || EColors.white};
  max-width: 100%;
`;

export const Divider = styled(View)<TDivider>`
  width: ${({ width }) => (width ? width : 0)}px;
  height: ${({ height }) => (height ? height : 0)}px;
  background-color: ${({ background }) =>
    background ? background : EColors.white};
`;

export const StyleScrollView = styled(ScrollView)`
  background-color: ${EColors.white};
`;

export const TitleSemiBold = styled(Text)`
  font-size: 16px;
  font-weight: 600;
`;

export const Title = styled(Text)`
  font-size: 16px;
`;

export const Body = styled(Text)<{ color?: string }>`
  font-size: 14px;
  color: ${({ color }) => color || EColors.black};
`;
export const BodySemiBold = styled(Text)`
  font-size: 14px;
  font-weight: 600;
`;

export const Touchable = styled(TouchableOpacity)`
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const StyledButton = styled(TouchableOpacity)`
  width: 100%;
  height: 52px;
  border-radius: 8px;
  background-color: ${EColors.red};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ItemView = styled(View)<TItemView>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  border-width: ${({ border }) => border || 0};
  border-color: ${({ border_color }) => border_color || EColors.white};
  background-color: ${({ background }) =>
    background ? background : EColors.white};
  border-radius: ${({ radius }) => radius || 0};
  padding: ${({ padding }) => padding || 0};
  margin: ${({ margin }) => margin || 0};
  align-items: center;
  justify-content: center;
`;

export const Button = styled(TouchableOpacity)`
  width: 100%;
  height: 52px;
  background-color: ${EColors.aqua};
  border-radius: 22px;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  margin-bottom: 22px;
`;

export const ViewRow = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledScroll = styled(ScrollView)`
  background-color: ${EColors.white};
`;
