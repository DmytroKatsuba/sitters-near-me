import React, { useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { TFilter, useSittersList } from "./hooks/useSittersList";
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
import { map } from "lodash";

export const Sitters = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const {
    sitters,
    loading,
    totalCount,
    getSitters,
    getMoreSitters,
    experiance,
    distance,
    filter,
    updateFilterValue,
  } = useSittersList();

  const load = loading && !sitters.length;

  const apply = () => {
    setVisible(false);
    getSitters();
  };

  const Experiance = ({
    data,
    selectData,
    dataKey,
  }: {
    data: number[];
    selectData: number;
    dataKey: keyof TFilter;
  }) =>
    map(data, (item) => (
      <TouchableOpacity
        key={item}
        onPress={() => updateFilterValue(dataKey, item)}
      >
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
      {load ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={sitters}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SitterCard data={item} />}
          showsVerticalScrollIndicator={false}
          onEndReached={getMoreSitters}
          ListFooterComponent={
            <View style={styles.footerBlock}>
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
            <TitleSemiBold>select experiance sitter</TitleSemiBold>
            <View>
              <TitleSemiBold>max</TitleSemiBold>
              <ViewRow>
                <Experiance
                  data={experiance}
                  selectData={filter.maxExperiance}
                  dataKey="maxExperiance"
                />
              </ViewRow>
              <TitleSemiBold>min</TitleSemiBold>
              <ViewRow>
                <Experiance
                  data={experiance}
                  selectData={filter.minExperiance}
                  dataKey="minExperiance"
                />
              </ViewRow>
              <TitleSemiBold>select distance sitter</TitleSemiBold>
              <TitleSemiBold>distance</TitleSemiBold>
              <ViewRow>
                <Experiance
                  data={distance}
                  selectData={filter.distance}
                  dataKey="distance"
                />
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

const styles = StyleSheet.create({
  footerBlock: {
    width: "100%",
    height: 22,
    marginTop: 10,
    alignItems: "center",
  },
});
