import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { EColors } from "../styled/colors";
import Icon from "../icon";
import { Divider } from "../styled";

export const FilterModal: FC<{
  visible: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}> = ({ visible = false, onClose, content, title }) => (
  <Modal
    isVisible={visible}
    propagateSwipe={true}
    onSwipeComplete={onClose}
    style={styles.modal}
    onBackdropPress={onClose}
    swipeDirection={["down"]}
    backdropTransitionOutTiming={0}
  >
    <View style={styles.container}>
      <View style={styles.line}>
        <Divider width={70} height={4} background={EColors.black} />
      </View>
      <View style={styles.main}>
        <Text style={styles.styleTitleText}>{title}</Text>
        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Icon name="close" />
        </TouchableOpacity>
      </View>
      {content}
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modal: { justifyContent: "flex-end", margin: 0 },
  main: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  styleTitleText: {
    color: EColors.black,
    fontWeight: "600",
    fontSize: 18,
    marginHorizontal: 10,
  },
  container: {
    backgroundColor: EColors.white,
    justifyContent: "space-between",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});
