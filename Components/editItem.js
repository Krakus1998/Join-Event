import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components";
import { CommonActions } from "@react-navigation/native";

const CustomTextInput = styled.TextInput`
border:1px solid green;
padding:10px;
margin-bottom:10px;
color:black;
width:100%;
text-align:center;
border-radius:20px
background-color:white;
`;
const AddBtn = styled.Image`
  height: 70px;
  width: 70px;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
export default function EventDetails({ navigation, route }) {
  const [title, setTitle] = useState(navigation.state.params.item.title);
  const [date, setDate] = useState(navigation.getParam("item").date);
  const [hour, setHour] = useState(navigation.state.params.item.hour);
  const [city, setCity] = useState(navigation.state.params.item.city);
  const [street, setStreet] = useState(navigation.state.params.item.street);
  const [author, setAuthor] = useState(navigation.state.params.item.author);
  const [description, setDescription] = useState(
    navigation.state.params.item.description
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.informationContainer}>
          <Text style={styles.informationTitle}>
            Przykładowa nazwa wydarzenia
          </Text>
          <CustomTextInput
            placeholder="Nazwa"
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>

        <View style={styles.informationContainer}>
          <Text style={styles.informationTitle}>Data wydarzenia</Text>
          <CustomTextInput
            placeholder="15.09.2022"
            value={date}
            onChangeText={(text) => setDate(text)}
          />
          <CustomTextInput
            placeholder="18:00"
            value={hour}
            onChangeText={(text) => setHour(text)}
          />
        </View>

        <View style={styles.informationContainer}>
          <Text style={styles.informationTitle}>Adres wydarzenia</Text>
          <CustomTextInput
            placeholder="Kraków"
            value={city}
            onChangeText={(text) => setCity(text)}
          />
          <CustomTextInput
            placeholder="Floriańska 25"
            value={street}
            onChangeText={(text) => setStreet(text)}
          />
        </View>

        <View style={styles.informationContainer}>
          <Text style={styles.informationTitle}>Twórca</Text>
          <CustomTextInput
            placeholder="Jan Kowalski"
            value={author}
            onChangeText={(text) => setAuthor(text)}
          />
        </View>

        <View style={styles.informationContainer}>
          <Text style={styles.informationTitle}>Opis wydarzenia</Text>
          <CustomTextInput
            placeholder="Dużo znaków"
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            console.log(title, date, hour, city, street, author, description);

            navigation.state.params.saveChanges({
              title,
              date,
              hour,
              city,
              street,
              author,
              description,
            });
            navigation.navigate("About");
          }}
        >
          <AddBtn source={require("../assets/plus.png")} />
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
  },

  informationContainer: {
    marginBottom: 10,
    marginTop: 5,
    alignItems: "center",
  },
  informationTitle: {
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 5,
  },
  informationText: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 17,
    fontFamily: "sans-serif-light",
  },
  description: {
    alignSelf: "flex-start",
    marginTop: 20,
    marginLeft: 10,
    fontSize: 15,
    lineHeight: 25,
  },
});
