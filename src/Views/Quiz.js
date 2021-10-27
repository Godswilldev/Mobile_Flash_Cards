/*
Quiz View
displays a card question
an option to view the answer (flips the card)
a "Correct" button
an "Incorrect" button
the number of cards left in the quiz
Displays the percentage correct once the quiz is complete
*/
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Quiz = () => {
  return (
    <View>
      <View>
        <Text>Does react native work with Android ?</Text>
        <Text>Answer</Text>
        <Button title="Correct" onPress={""} />
        <Button title="Incorrect" onPress={""} />
      </View>

      <View>
        <Text>Yes !</Text>
        <Text>Answer</Text>
        <Button title="Correct" onPress={""} />
        <Button title="Incorrect" onPress={""} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Quiz;
