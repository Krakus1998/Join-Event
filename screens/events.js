import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  SafeAreaView,
  Text,
} from "react-native";
import styled from "styled-components";
import TestJE from "../Components/TestJE";
import { MaterialIcons } from "@expo/vector-icons";
import Form from "../Components/form";

const Body = styled.View`
  height: 100%;
`;
const AddBtn = styled.Image`
  height: 70px;
  width: 70px;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
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
export default function About(navigation) {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("Coś");
  const [date, setDate] = useState("Coś");
  const [hour, setHour] = useState("Coś");
  const [city, setCity] = useState("Coś");
  const [street, setStreet] = useState("Coś");
  const [author, setAuthor] = useState("Coś");
  const [description, setDescription] = useState("Coś");
  const [items, setItems] = useState([]);
  const addNote = useCallback(() => {
    if (title.length) {
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
    }
  }, [items, title, date, hour, city, street, author, description]);
  return (
    <Body>
      <ScrollView vertical={true} style={styles.items}>
        {items.map((item) => {
          return <TestJE data={item} />;
        })}
      </ScrollView>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.rowOption}>
          <MaterialIcons
            name="arrow-back"
            size={35}
            onPress={() => {
              setModalOpen(false);
              addNote();
            }}
          />
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
      <TouchableWithoutFeedback
        style={styles.bTn}
        onPress={() => setModalOpen(true)}
      >
        <AddBtn source={require("../assets/plus.png")} />
      </TouchableWithoutFeedback>
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
  more: {},
});
