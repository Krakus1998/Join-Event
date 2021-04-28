import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Input from "../Components/InputAuthorization";
import validator from "validator";
import { auth } from "firebase";
import { globalStyles } from "../styles/global";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
const validateFields = (email, password) => {
  const isValid = {
    email: validator.isEmail(email),
    password: validator.isStrongPassword(password),
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
    <View style={globalStyles.container}>
      <View style={{ marginVertical: "70%" }}>
        <Text style={globalStyles.titleText}>Zaloguj się!</Text>
        <Text style={{ marginLeft: 20, marginVertical: 3 }}>Email</Text>
        <View style={globalStyles.InputView}>
          <MaterialIcons name="mail" color="black" size={35} />
          <Input
            placeholder={"Wpisz Email"}
            text={emailField.text}
            onChangeText={(text) => {
              setEmailField({ text });
            }}
            errorMessage={emailField.errorMessage}
            labelStyle={globalStyles.input}
            autoCompleteStyle={"email"}
          />
        </View>
        <Text style={{ marginLeft: 20, marginVertical: 3 }}>Hasło</Text>
        <View style={globalStyles.InputView}>
          <MaterialIcons name="lock" color="black" size={35} />
          <Input
            placeholder="Wpisz hasło"
            text={passwordField.text}
            secureTextEntry={true}
            onChangeText={(text) => {
              setPasswordField({ text });
            }}
            errorMessage={passwordField.errorMessage}
            labelStyle={globalStyles.input}
            autoCompleteStyle={"password"}
          />
        </View>

        {isCreatingAccountMode && (
          <View>
            <Text style={{ marginLeft: 20, marginVertical: 3 }}>
              Powtórz hasło
            </Text>
            <View style={globalStyles.InputView}>
              <MaterialIcons name="lock" color="black" size={35} />
              <Input
                placeholder="Wpisz hasło"
                text={passwordReentryField.text}
                secureTextEntry={true}
                onChangeText={(text) => {
                  setPasswordReentryField({ text });
                }}
                errorMessage={passwordReentryField.errorMessage}
                labelStyle={globalStyles.input}
              />
            </View>
          </View>
        )}
        {!isCreatingAccountMode ? (
          <TouchableOpacity
            style={globalStyles.buttons}
            onPress={() => {
              const isValid = validateFields(
                emailField.text,
                passwordField.text
              );
              let isAllValid = true;
              if (!isValid.email) {
                emailField.errorMessage = "Invalid email";
                setEmailField({ ...emailField });
                isAllValid = false;
              }
              if (!isValid.password) {
                passwordField.errorMessage = "Invalid password";
                setPasswordField({ ...passwordField });
                isAllValid = false;
              }
              if (isAllValid) {
                login(emailField.text, passwordField.text);
              }
            }}
          >
            <Text style={globalStyles.buttonsText}>Zaloguj</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={globalStyles.buttons}
            onPress={() => {
              const isValid = validateFields(
                emailField.text,
                passwordField.text
              );
              let isAllValid = true;
              if (!isValid.email) {
                emailField.errorMessage = "Invalid email";
                setEmailField({ ...emailField });
                isAllValid = false;
              }
              if (!isValid.password) {
                passwordField.errorMessage =
                  "Password must have 8 long with  , one number ,uppercase , lowecase and symbol don't use '!' and '@'";
                setPasswordField({ ...passwordField });
                isAllValid = false;
              }

              if (passwordReentryField.text != passwordField.text) {
                passwordReentryField.errorMessage = "Password don't match";
                setPasswordReentryField({ ...passwordReentryField });
                isAllValid = false;
              }
              if (isAllValid) {
                createAccount(emailField.text, passwordField.text);
              }
            }}
          >
            <Text style={globalStyles.buttonsText}>Zarejestruj się</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          onPress={() => {
            setCreatingAccountMode(!isCreatingAccountMode);
          }}
        >
          <Text style={{ marginLeft: 20, marginVertical: 3, fontSize: 20 }}>
            {isCreatingAccountMode
              ? "Chcesz się zalogować ?"
              : "Nie masz konta ?"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
