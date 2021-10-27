/* 
Individual Deck View
displays the title of the Deck
displays the number of cards in the deck
displays an option to start a quiz on this specific deck
An option to add a new question to the deck
*/
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Individualdeck = () => {
  return (
    <View>
      <Text>UdaciCards</Text>
      <Text>3 cards</Text>
      <Button title="Add Card" color="#fababa" onPress={""} />
      <Button title="Start Quiz" onPress={""} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Individualdeck;
