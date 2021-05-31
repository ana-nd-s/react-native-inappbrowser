import React from "react";
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import { openLink } from "./utils/InAppBrowser";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.screen}>
        <Text style={styles.title}>React Native In App Browser</Text>
        <Button
          title="Open Link"
          onPress={() => openLink("https://www.reckonsys.com/")}
        />
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
