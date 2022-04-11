export const getAllCharacters = () => (dispatch) => {
  return fetch(`https://www.breakingbadapi.com/api/characters`)
    .then((r) => r.json())
    .then((json) => {
      dispatch({ type: "GET_ALL_CHARACTERS", payload: json });
    });
};

export const getCharacter = (id) => (dispatch) => {
  return fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
    .then((r) => r.json())
    .then((json) => {
      dispatch({ type: "GET_CHARACTER", payload: json });
    });
};

export const addCharacterFav = (character) => {
  return { type: "ADD_CHARACTER_FAV", payload: character };
};

export const deleteCharacterFav = (id) => {
  return { type: "DELETE_CHARACTER_FAV", payload: id };
};
