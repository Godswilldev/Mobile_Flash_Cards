/*
New Question View
An option to enter in the question
An option to enter in the answer
An option to submit the new question
*/

import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const Newquestion = () => {
  const [title, setTitle] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <View>
      <TextInput
        placeholder="Question Title"
        value={title}
        onChangeText={(e) => setTitle(e)}
        multiline
      />

      <TextInput
        placeholder="Answer"
        value={answer}
        onChangeText={(e) => setAnswer(e)}
        multiline
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Newquestion;
