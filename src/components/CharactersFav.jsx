import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCharacterFav } from "../redux/actions";

export default function CharactersFav() {
  const charactersFav = useSelector((state) => state.charactersFav);
  const dispatch = useDispatch();

  const handleClick = (e, id) => {
    e.preventDefault();
    dispatch(deleteCharacterFav(id));
  };
  return (
    <div>
      {charactersFav &&
        charactersFav.map((c) => {
          return (
            <div key={c.char_id}>
              <button onClick={(e) => handleClick(e, c.char_id)}>
                Eliminar de favoritos
              </button>
              <h2>{c.name}</h2>
            </div>
          );
        })}
    </div>
  );
}
