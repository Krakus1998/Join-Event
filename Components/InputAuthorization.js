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
    <View>
      <Text style={styles.error}>{errorMessage && `${errorMessage}`}</Text>
      <TextInput
        underlineColorAndroid="transparent"
        selectionColor="transparent"
        style={inputStyle}
        value={text}
        onChangeText={onChangeText}
        {...inputProps}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  error: {
    fontSize: 12,
    color: "red",
    marginLeft: 4,
  },
});
