import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styled from "styled-components";
import TestJE from "../Components/TestJE";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Form from "../Components/form";
import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";
import Edit from "../Components/editItem";
const Body = styled.View`
  height: 100%;
`;
export default function About({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const [items, setItems] = useState([]);

  const addNote = useCallback(() => {
    if (title != null && title.length > 0) {
      const payload = {
        title: title,
        date: date,
        hour: hour,
        city: city,
        street: street,
        author: author,
        description: description,
      };
      setItems([payload, ...items]);
      setTitle(null);
      setDate(null);
      setHour(null);
      setCity(null);
      setStreet(null);
      setAuthor(null);
      setDescription(null);
      showMessage({
        message: "Wydarzenie dodane!",
        type: "success",
      });
    } else {
      showMessage({
        message: "Dodawanie wydarzenia nie powiodło sie",
        type: "danger",
      });
    }
  }, [items, title, date, hour, city, street, author, description]);

  const removeItem = (index) => {
    items.splice(index, 1);
    setItems([...items]);
    showMessage({
      message: "usunięcie powiodło się!",
      type: "success",
    });
  };
  const editItem = (index, item) => {
    console.log(item);
    items[index] = item;
    setItems([...items]);
  };
  return (
    <Body>
      <FlashMessage statusBarHeight="5" />
      <ScrollView vertical={true} style={styles.items}>
        {items.map((item, index) => {
          return (
            <TestJE
              data={item}
              onDelete={() => removeItem(index)}
              onEdit={(item) => editItem(index, item)}
              navigation={navigation}
              onOptions={() => {
                navigation.navigate("Edit", {
                  item,
                  saveChanges: (x) => editItem(index, x),
                });
              }}
            />
          );
        })}
      </ScrollView>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.rowOption}>
          <View style={{ flexGrow: 1, flexShrink: 1 }}>
            <MaterialIcons
              name="arrow-back"
              color="#ffa200"
              size={40}
              onPress={() => {
                setModalOpen(false);
              }}
            />
          </View>
          <View style={{ flexGrow: 1, flexShrink: 1, marginVertical: 4 }}>
            <Text
              style={{
                fontSize: 25,
                color: "#ffa200",
                fontFamily: "Audiowide-Regular",
              }}
            >
              Dodaj Wydarzenie
            </Text>
          </View>
          <View style={{ flexShrink: 1 }}>
            <MaterialIcons
              name="add"
              color="#ffa200"
              size={40}
              onPress={() => {
                setModalOpen(false);
                addNote();
              }}
            />
          </View>
        </View>
        <Form
          setTitle={setTitle}
          setDate={setDate}
          setHour={setHour}
          setCity={setCity}
          setStreet={setStreet}
          setAuthor={setAuthor}
          setDescription={setDescription}
          title={title}
          date={date}
          hour={hour}
          city={city}
          street={street}
          author={author}
          description={description}
        />
      </Modal>
      <View style={styles.addBtnView}>
        <TouchableOpacity onPress={() => setModalOpen(true)}>
          <MaterialIcons name="add" style={styles.addBtn} />
        </TouchableOpacity>
      </View>
    </Body>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "BlackOpsOne-Regular",
    fontSize: 18,
  },
  header: {
    fontFamily: "Audiowide-Regular",
    fontSize: 15,
    color: "#ffa200",
    marginTop: 20,
    marginLeft: 5,
  },
  items: {
    marginTop: 15,
  },
  rowOption: {
    flexDirection: "row",
    width: "100%",
    padding: 5,

    backgroundColor: "#EEE",
  },
  addBtn: {
    color: "#ffa200",
    fontSize: 65,
    backgroundColor: "#DDD",
    borderRadius: 40,
  },
  addBtnView: {
    position: "absolute",
    marginTop: "170%",
    marginLeft: "73%",
    alignItems: "center",
  },
});
