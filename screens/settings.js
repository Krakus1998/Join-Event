import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { auth } from "firebase";

export default () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          auth().signOut();
        }}
      >
        <Text style={{ color: "red", fontSize: 24, fontWeight: "bold" }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    borderRadius: 25,
    backgroundColor: "black",
    height: 50,
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
