/*
Deck List View (Default View)
displays the title of each Deck
displays the number of cards in each deck
*/

import React from "react";
import { View, StyleSheet } from "react-native";
import Deck from "./../Components/Deck";

const Decklist = () => {
  return (
    <View>
      <Deck title="Udaci Cards" noOfCards={3} />
      <Deck title="New Deck" noOfCards={0} />
      <Deck title="New Deck 2" noOfCards={0} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Decklist;
