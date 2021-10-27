/*
New Deck View
An option to enter in the title for the new deck
An option to submit the new deck title
*/

import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const Newdeck = () => {
  const [title, setTitle] = useState("");
  return (
    <View>
      <Text>What is the title of your new Deck ?</Text>
      <TextInput
        placeholder="Deck Title"
        value={title}
        onChangeText={(e) => setTitle(e)}
      />
      <Button title="Submit" color="#0a0a0a" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Newdeck;
