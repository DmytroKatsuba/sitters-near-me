import { View, Image } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  margin: 10px;
  border-width: 1px;
  border-radius: 15px;
  padding: 8px;
`;

export const RowContainer = styled(View)`
  flex-direction: row;
`;

export const StyledImage = styled(Image)`
  width: 90px;
  height: 90px;
  border-radius: 99px;
`;
