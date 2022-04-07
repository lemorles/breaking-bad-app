import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to={"/"}>Inicio</Link>
      <Link to={"/characters"}>Ver personajes</Link>
      <Link to={"/favs"}>Ver favoritos</Link>
    </nav>
  );
};

export default Nav;
