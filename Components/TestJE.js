import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import EventDetails from "../screens/details";

export default function Test({ data }) {
  const [modalOpen, setModalOpen] = useState(false);
  const { title, date, hour, city, street, author, description } = data;
  return (
    <View>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.rowOption}>
          <MaterialIcons
            name="arrow-back"
            size={35}
            onPress={() => setModalOpen(false)}
          />
          <Text style={styles.header}>Szczegóły</Text>
          <MaterialIcons
            name="add"
            size={35}
            onPress={() => setModalOpen(false)}
          />
        </View>
        <EventDetails
          title={title}
          date={date}
          hour={hour}
          city={city}
          street={street}
          author={author}
          description={description}
        ></EventDetails>
      </Modal>
      <TouchableOpacity onPress={() => setModalOpen(true)}>
        <View style={styles.container}>
          <Text>{title}</Text>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 120,
    marginLeft: 15,
  },
  titleText: {
    fontFamily: "BlackOpsOne-Regular",
    fontSize: 10,
  },
  header: {
    fontFamily: "Audiowide-Regular",
    fontSize: 15,
    color: "#ffa200",
    marginTop: 20,
  },
  tinyLogo: {
    width: 120,
    height: 120,
  },
  rowOption: {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
    marginVertical: 5,
    marginHorizontal: "2.5%",
    justifyContent: "space-between",
  },
  header: {
    fontFamily: "Audiowide-Regular",
    fontSize: 35,
    color: "#ffa200",
  },
});
