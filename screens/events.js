import React from 'react';
import { StyleSheet, View, Text, ScrollView, Button } from 'react-native';
import TestJE from './Components/TestJE';
import Filter from './Components/filter';

export default function About(navigation) {
  return (
    <View style={styles.container}>
      <Filter />
      <View>
        <Text style={styles.header}>Najpopularniejsze wydarzenia miesiąca:</Text>
        <ScrollView horizontal={true} style={styles.items}>
          <TestJE />
          <TestJE />
          <TestJE />
          <TestJE />
          <TestJE />
          <TestJE />
          <TestJE />
          <TestJE />
          <TestJE />
          <TestJE />
        </ScrollView>
        <Text style={styles.header}>Najczęściej odwiedzane miejsca:</Text>
        <ScrollView horizontal={true} style={styles.items}>
          <TestJE />
          <TestJE />
          <TestJE />
          <TestJE />
          <TestJE />
          <TestJE />
          <TestJE />
          <TestJE />
          <TestJE />
          <TestJE />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  titleText: {
    fontFamily: 'BlackOpsOne-Regular',
    fontSize: 18,
  },
  header: {
    fontFamily: 'Audiowide-Regular',
    fontSize: 15,
    color: '#ffa200',
    marginTop: 20,
    marginLeft: 5,
  },
  items: {
    marginTop: 15,
  },
  more: {

  }
});