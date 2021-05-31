import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.screen}>
        <Text style={styles.title}>React Native In App Browser</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
  },
});

export default App;
