import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";

export default function EventDetails(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.icon}>
          <Image source={require("../assets/star.png")} />
        </View>

        <View style={styles.title}>
          <Text style={styles.titleText}>{props.title}</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("../assets/city.jpg")} />
        </View>

        <View style={styles.informationContainer}>
          <Text style={styles.informationTitle}>
            <Image source={require("../assets/clock.png")} />
            Data wydarzenia
          </Text>
          <Text style={styles.informationText}>
            {props.date} , godzina {props.hour}
          </Text>
        </View>

        <View style={styles.informationContainer}>
          <Text style={styles.informationTitle}>
            <Image source={require("../assets/City.png")} />
            Adres wydarzenia
          </Text>
          <Text style={styles.informationText}>
            {props.city} ul.{props.street}
          </Text>
        </View>

        <View style={styles.informationContainer}>
          <Text style={styles.informationTitle}>
            <Image source={require("../assets/user.png")} />
            Twórca
          </Text>

          <Text style={styles.informationText}>{props.author}</Text>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.informationTitle}>Opis wydarzenia</Text>

          <Text style={styles.description}>{props.description}</Text>
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
  imageContainer: {
    marginTop: 15,
  },
  image: {
    width: "90%",
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
    borderRadius: 25,
    marginBottom: 30,
  },
  icon: {
    position: "absolute",
    alignSelf: "flex-end",
    top: 5,
    right: 10,
  },
  title: {
    alignSelf: "flex-start",
    alignItems: "center",
    marginTop: 10,
    left: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  informationContainer: {
    marginBottom: 20,
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
  descriptionContainer: {
    marginBottom: 20,
    width: "95%",
    alignItems: "center",
    alignSelf: "center",
  },
  description: {
    alignSelf: "flex-start",
    marginTop: 20,
    marginLeft: 10,
    fontSize: 15,
    lineHeight: 25,
  },
});
