import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export default ({
  labelStyle,
  label,
  errorMessage,
  inputStyle,
  text,
  onChangeText,
  ...inputProps
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={labelStyle}>{label}</Text>
        <Text style={styles.error}>{errorMessage && `${errorMessage}`}</Text>
      </View>
      <TextInput
        underlineColorAndroid="transparent"
        selectionColor="transparent"
        style={[styles.input, inputStyle]}
        value={text}
        onChangeText={onChangeText}
        {...inputProps}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    margin: 4,
  },
  error: {
    fontSize: 12,
    color: "red",
    marginLeft: 4,
  },
  labelContainer: {
    flexDirection: "row",
    marginBottom: 4,
  },
  input: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    paddingLeft: 4,
    height: 32,
    fontSize: 24,
    color: "black",
  },
});
