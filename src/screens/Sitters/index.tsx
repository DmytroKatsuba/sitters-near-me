import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ERootStack, TRootStack } from "../../navigation/config";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useSittersList } from "./hooks/useSittersList";
import { SitterCard } from "./components/SitterCard";
import {
  Body,
  Button,
  FilterModal,
  Header,
  ItemView,
  TitleSemiBold,
  ViewContainer,
  ViewRow,
} from "../../components";
import { EColors } from "../../components/styled/colors";
import { includes, map } from "lodash";

export const Sitters = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const navigation = useNavigation<NativeStackNavigationProp<TRootStack>>();

  const {
    sitters,
    loading,
    pageInfo,
    totalCount,
    getSitters,
    getMoreSitters,
    count,
    expiriance,
    distance,
    selectDistance,
    maxExpiriance,
    minExpiriance,
    changeDistance,
    selectMaxExpiriance,
    selectMinExpiriance,
  } = useSittersList();

  const apply = () => {
    setVisible(false);
    getSitters();
  };

  const renderExpiriance = (
    data: number[],
    selectData: number,
    onSelect: (item: number) => void
  ) =>
    map(data, (item) => (
      <TouchableOpacity key={item} onPress={() => onSelect(item)}>
        <ItemView
          width="43px"
          padding="10px"
          border="1px"
          border_color={
            item === selectData ? EColors.border : EColors.background
          }
          background={item === selectData ? EColors.border : EColors.white}
          margin="4px"
          radius="8px"
        >
          <Body
            color={item === selectData ? EColors.royal_blue : EColors.black}
          >
            {item}
          </Body>
        </ItemView>
      </TouchableOpacity>
    ));

  return (
    <ViewContainer>
      <Header
        title="Sitters"
        iconRight="categorie"
        onPressRight={() => setVisible(true)}
      />
      {loading && !sitters.length ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={sitters}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SitterCard data={item} />}
          showsVerticalScrollIndicator={false}
          onEndReached={getMoreSitters}
          ListFooterComponent={
            <View
              style={{
                width: "100%",
                height: 22,
                marginTop: 10,
                alignItems: "center",
              }}
            >
              {loading ? (
                <ActivityIndicator />
              ) : (
                <Text>
                  {sitters.length}/{totalCount}
                </Text>
              )}
            </View>
          }
        />
      )}
      <FilterModal
        title={"Filter"}
        visible={visible}
        onClose={() => setVisible(false)}
        content={
          <>
            <TitleSemiBold>select expiriance sitter</TitleSemiBold>
            <View>
              <TitleSemiBold>max</TitleSemiBold>
              <ViewRow>
                {renderExpiriance(
                  expiriance,
                  maxExpiriance,
                  selectMaxExpiriance
                )}
              </ViewRow>
              <TitleSemiBold>min</TitleSemiBold>
              <ViewRow>
                {renderExpiriance(
                  expiriance,
                  minExpiriance,
                  selectMinExpiriance
                )}
              </ViewRow>
              <TitleSemiBold>select distance sitter</TitleSemiBold>
              <TitleSemiBold>distance</TitleSemiBold>
              <ViewRow>
                {renderExpiriance(distance, selectDistance, changeDistance)}
              </ViewRow>
            </View>
            <Button onPress={apply}>
              <TitleSemiBold>Apply</TitleSemiBold>
            </Button>
          </>
        }
      />
    </ViewContainer>
  );
};
