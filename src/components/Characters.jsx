import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters } from "../redux/actions";
import { Link } from "react-router-dom";

export default function Characters() {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.allCharacters);

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);

  return (
    <div>
      <h1>BREAKING BAD</h1>
      <h2>Characters:</h2>

      <div>
        {allCharacters &&
          allCharacters.map((c) => {
            return (
              <div key={c.char_id}>
                <Link to={`/characters/${c.char_id}`}>
                  <h3>{c.name}</h3>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
