import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/Redux/app/store";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Decklist from "./src/Views/DeckList";
import Newdeck from "./src/Views/NewDeck";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Individualdeck from "./src/Views/IndividualDeck";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="DeckList" component={Decklist} />
      <HomeStack.Screen name="Individualdeck" component={Individualdeck} />
    </HomeStack.Navigator>
  );
}

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Tabs.Navigator>
            <Tabs.Screen name="Home" component={HomeStackScreen} />
            <Tabs.Screen name="New Deck" component={Newdeck} />
          </Tabs.Navigator>
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
