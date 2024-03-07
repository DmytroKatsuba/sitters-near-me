import { View, StyleSheet, Platform } from "react-native";
import { styled } from "styled-components";
import { EColors } from "../styled/colors";

export const Background = styled(View)`
  flex: 1;
  background-color: ${EColors.black};
  opacity: 0.7;
`;

export const Popup = styled(View)`
  width: 90%;
  background-color: ${EColors.white};
  border-radius: 16px;
  padding: 16px;
`;

export const ContantContainer = styled(View)`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  padding-top: ${Platform.OS === "ios" ? 50 : 20}px;
  padding-bottom: ${Platform.OS === "ios" ? 30 : 20}px;
`;

export const styles = StyleSheet.create({
  popupShadow: {
    shadowColor: EColors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,

    elevation: 1,
  },
});
