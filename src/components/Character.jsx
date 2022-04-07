import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getCharacter,
  addCharacterFav,
  getAllCharacters,
} from "../redux/actions";

export default function Character() {
  const params = useParams();
  const dispatch = useDispatch();
  // const character = useSelector(state => state.character)
  const { character } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCharacter(params.id));
    dispatch(getAllCharacters());
  }, [dispatch, params.id]);

  const handleClick = (e) => {
    e.preventDefault();
    // console.log("click");
    // dispatch(addCharacterFav(params.id));
    dispatch(addCharacterFav(character));
  };

  return (
    <div>
      <button onClick={handleClick}>Agregar a favoritos</button>
      <h1>{character.name}</h1>
      <img src={character.img} alt={character.name} />
      <p>{character.nickname}</p>
    </div>
  );
}
