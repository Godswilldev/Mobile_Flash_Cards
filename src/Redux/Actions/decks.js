import { AsyncStorage } from "react-native";
import { initDecks } from "./../../utils/initDecks";

export const ADD_CARDS_TO_DECK = "ADD_CARDS_TO_DECK";
export const GET_DECKS = "GET_DECKS";
export const ADD_DECKS = "ADD_DECKS";

const KEY = "@GodswillEdet:decks";

const saveDecks = async (decks) =>
  await AsyncStorage.setItem(KEY, JSON.stringify(decks));

const getAllDecks = async () => {
  const decks = await AsyncStorage.getItem(KEY);
  decks ? JSON.parse(decks) : null;
};

export const getDecks = (decks) => ({
  type: GET_DECKS,
  payload: decks,
});

export const handleGetDecks = () => async (dispatch) => {
  let decks = await getAllDecks();
  if (decks === null) {
    await awaitNotifications();
    decks = initDecks;
    saveDecks(initDecks);
  } else {
    await dispatch(getDecks(decks));
  }
};

export const addDecks = (title) => ({
  type: ADD_DECKS,
  payload: title,
});

export const handleAddDecks = (title) => async (dispatch) => {
  let decks = await getAllDecks();
  decks = {
    ...decks,
    [title]: {
      title: title,
      questions: [],
    },
  };
  await saveDecks(decks);
  await dispatch(addDecks(decks[title]));
};

export const addCardToDeck = (deckTitle, card) => ({
  type: ADD_CARDS_TO_DECK,
  deckTitle,
  card,
});

export const handleAddCardsToDecks = (deckTitle, card) => async (dispatch) => {
  let decks = await getAllDecks(),
    deck = decks[deckTitle];
  deck = {
    ...deck,
    questions: [...deck.questions, card],
  };
  decks = {
    ...decks,
    [deck.title]: deck,
  };
  await saveDecks(decks);
  await dispatch(addCardToDeck(deckTitle, card));
};
