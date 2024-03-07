import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { ERootStack, TRootStack } from "../../navigation/config";
import { Body, Container, Header, StyledScroll, Title } from "../../components";
import { Logo, StyledView } from "./styled";

export const SitterDetails = () => {
  const {
    params: { data },
  } = useRoute<RouteProp<TRootStack, ERootStack.SitterDetails>>();

  return (
    <StyledScroll>
      <Header title={data.firstName} iconLeft="chevron" />
      <Container>
        <Logo source={{ uri: data.profilePhotoURL }} />
        <StyledView>
          <Title>For my:</Title>
          <Body>{data.bio || "no info"}</Body>
        </StyledView>
      </Container>
    </StyledScroll>
  );
};
