import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { selectTasks } from "./tasksSlice";
import Card from "./Card";

const CardList = () => {
  const data = useSelector(selectTasks);
  return (
    <View>
      {data.map((element) => {
        return (
          <Card
            key={element.id}
            id={element.id}
            content={element.content}
            times={element.times}
            color={element.color}
          />
        );
      })}
    </View>
  );
};

export default CardList;
