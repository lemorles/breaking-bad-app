import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacter } from "../redux/actions";

export default function Character() {
  const params = useParams();
  const dispatch = useDispatch();
  // const character = useSelector(state => state.character)
  const { character } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCharacter(params.id));
  }, [dispatch, params.id]);

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.img} alt={character.name} />
      <p>{character.nickname}</p>
    </div>
  );
}
