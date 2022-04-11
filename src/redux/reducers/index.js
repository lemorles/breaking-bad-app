const initialState = {
  allCharacters: [],
  character: {},
  charactersFav: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_CHARACTERS":
      return {
        ...state,
        allCharacters: action.payload,
      };
    case "GET_CHARACTER":
      return {
        ...state,
        character: action.payload[0],
      };
    case "ADD_CHARACTER_FAV":
      return {
        ...state,
        charactersFav: [...state.charactersFav, action.payload],
      };
    case "DELETE_CHARACTER_FAV":
      return {
        ...state,
        charactersFav: state.charactersFav.filter(
          (c) => c.char_id !== action.payload
        ),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
