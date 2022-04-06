const initialState = {
  allCharacters: [],
  character: {},
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
    default:
      return { ...state };
  }
};

export default rootReducer;
