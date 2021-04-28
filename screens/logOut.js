import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { auth } from "firebase";
import { globalStyles } from "../styles/global";
import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";
export default () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlashMessage statusBarHeight="5" />
      <TouchableOpacity
        style={globalStyles.buttons}
        onPress={() => {
          auth().signOut();
          showMessage({
            message: "Wylogowano!",
            type: "success",
          });
        }}
      >
        <Text style={globalStyles.buttonsText}>Wyloguj</Text>
      </TouchableOpacity>
    </View>
  );
};
