import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { TextInput } from "react-native-paper";

const AddTask = () => {
  const [task, setTask] = useState("");
  return (
    <SafeAreaView>
      <View>
        <View>
          <Text>Add</Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            value={task}
            onChangeText={setTask}
            label="Task"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.redColorCube} />
          <TouchableOpacity style={styles.yellowColorCube} />
          <TouchableOpacity style={styles.greenColorCube} />
          <TouchableOpacity style={styles.purpleColorCube} />
          <TouchableOpacity style={styles.blueColorCube} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {},
  redColorCube: { height: 32, width: 32, backgroundColor: "#F6416C" },
  yellowColorCube: { height: 32, width: 32, backgroundColor: "#FFDE7D" },
  greenColorCube: { height: 32, width: 32, backgroundColor: "#00B8A9" },
  purpleColorCube: { height: 32, width: 32, backgroundColor: "#A6B1E1" },
  blueColorCube: { height: 32, width: 32, backgroundColor: "##40BAD5" },
});

export default AddTask;
