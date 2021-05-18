import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { increaseTaskActionCreator } from "./tasksSlice";

const Card = ({ id, content, times, color }) => {
  const dispatch = useDispatch();
  const handlePress = () => {
    dispatch(increaseTaskActionCreator(id));
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.container, { backgroundColor: `${color}` }]}>
        <Text style={styles.content}>{content}</Text>
        <View style={styles.countBox}>
          <Text style={styles.times}>{times}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: { height: 50, width: 100 },
  content: {},
  times: {},
  button: {},
  countBox: { backgroundColor: "#eee", height: 20, width: 20 },
});

export default Card;
