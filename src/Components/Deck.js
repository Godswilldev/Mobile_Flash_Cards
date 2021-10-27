import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Deck = ({ title, noOfCards }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{noOfCards} Cards</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Deck;
