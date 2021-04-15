import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Input from "../Components/InputAuthorization";
import validator from "validator";
import { auth } from "firebase";

const validateFields = (email, password) => {
  const isValid = {
    email: validator.isEmail(email),
    password: validator.isStrongPassword(password, {
      minLength: 8,
      //   minLowercase: 1,
      //   minUppercase: 1,
      //   minNumbers: 1,
      //   minSymbols: 1,
    }),
  };
  return isValid;
};
const login = (email, password) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log("Logged In");
    });
};

const createAccount = (email, password) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log("Creating user...");
    });
};
export default () => {
  const [isCreatingAccountMode, setCreatingAccountMode] = useState(false);
  const [emailField, setEmailField] = useState({
    text: "",
    errorMessage: "",
  });
  const [passwordField, setPasswordField] = useState({
    text: "",
    errorMessage: "",
  });
  const [passwordReentryField, setPasswordReentryField] = useState({
    text: "",
    errorMessage: "",
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <View style={{ flex: 1 }}>
        <Input
          label="Email"
          text={emailField.text}
          onChangeText={(text) => {
            setEmailField({ text });
          }}
          errorMessage={emailField.errorMessage}
          labelStyle={styles.label}
          autoCompleteStyle={"email"}
        />
        <Input
          label="Password"
          text={passwordField.text}
          secureTextEntry={true}
          onChangeText={(text) => {
            setPasswordField({ text });
          }}
          errorMessage={passwordField.errorMessage}
          labelStyle={styles.label}
          autoCompleteStyle={"password"}
        />
        {isCreatingAccountMode && (
          <Input
            label="Re-enter Password"
            text={passwordReentryField.text}
            secureTextEntry={true}
            onChangeText={(text) => {
              setPasswordReentryField({ text });
            }}
            errorMessage={passwordReentryField.errorMessage}
            labelStyle={styles.label}
          />
        )}

        <TouchableOpacity
          onPress={() => {
            setCreatingAccountMode(!isCreatingAccountMode);
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              color: "blue",
              fontSize: 16,
              margin: 4,
            }}
          >
            {isCreatingAccountMode
              ? "Already have an account ?"
              : "Create new account"}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          const isValid = validateFields(emailField.text, passwordField.text);
          let isAllValid = true;
          if (!isValid.email) {
            emailField.errorMessage = "Invalid email";
            setEmailField({ ...emailField });
            isAllValid = false;
          }
          if (!isValid.password) {
            passwordField.errorMessage =
              "Password must have 8 long with one number , uppercase , lowecase and symbol";
            setPasswordField({ ...passwordField });
            isAllValid = false;
          }

          if (
            isCreatingAccountMode &&
            passwordReentryField.text != passwordField.text
          ) {
            passwordReentryField.errorMessage = "Password don't match";
            setPasswordReentryField({ ...passwordReentryField });
            isAllValid = false;
          }
          if (isAllValid) {
            isCreatingAccountMode
              ? createAccount(emailField.text, passwordField.text)
              : login(emailField.text, passwordField.text);
          }
        }}
      >
        <Text style={{ color: "red", fontSize: 24, fontWeight: "bold" }}>
          {isCreatingAccountMode ? "Create Account" : "Login"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  header: {
    fontSize: 72,
    color: "red",
    alignSelf: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
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
