import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import CardList from "./component/CardList";
import AddTask from "./component/AddTask";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <View style={styles.container}>
          <Text>Achieved</Text>
          <CardList />
          <View>
            <Button style={styles.button} title="add" />
          </View>
          <StatusBar style="auto" />
          <AddTask />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
