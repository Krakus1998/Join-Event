import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styled from "styled-components";

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

export default function EventDetails(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.informationContainer}>
          <Text style={styles.informationTitle}>
            Przykładowa nazwa wydarzenia
          </Text>
          <CustomTextInput
            placeholder="Nazwa"
            value={props.title}
            onChangeText={(text) => props.setTitle(text)}
          />
        </View>

        <View style={styles.informationContainer}>
          <Text style={styles.informationTitle}>Data wydarzenia</Text>
          <CustomTextInput
            placeholder="15.09.2022"
            value={props.date}
            onChangeText={(text) => props.setDate(text)}
          />
          <CustomTextInput
            placeholder="18:00"
            value={props.hour}
            onChangeText={(text) => props.setHour(text)}
          />
        </View>

        <View style={styles.informationContainer}>
          <Text style={styles.informationTitle}>Adres wydarzenia</Text>
          <CustomTextInput
            placeholder="Kraków"
            value={props.city}
            onChangeText={(text) => props.setCity(text)}
          />
          <CustomTextInput
            placeholder="Floriańska 25"
            value={props.street}
            onChangeText={(text) => props.setStreet(text)}
          />
        </View>

        <View style={styles.informationContainer}>
          <Text style={styles.informationTitle}>Twórca</Text>
          <CustomTextInput
            placeholder="Jan Kowalski"
            value={props.author}
            onChangeText={(text) => props.setAuthor(text)}
          />
        </View>

        <View style={styles.informationContainer}>
          <Text style={styles.informationTitle}>Opis wydarzenia</Text>
          <CustomTextInput
            placeholder="Dużo znaków"
            value={props.description}
            onChangeText={(text) => props.setDescription(text)}
          />
        </View>
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
