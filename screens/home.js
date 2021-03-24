import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ScreenTitle from './Components/ScreenTitle';
import JoinEvent_page from './Components/JoinEvent';

export default function Home() {
  return (
    <View style={styles.container}>
      <ScreenTitle />
      <JoinEvent_page/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  titleText: {
    fontFamily: 'BlackOpsOne-Regular',
    fontSize: 18,
  }
});