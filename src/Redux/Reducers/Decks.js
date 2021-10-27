const initialState = {};

const decks = (state = initialState, action) => {
  switch (action.type) {
    case "":
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default decks;
