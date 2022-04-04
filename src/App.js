import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Character from "./components/Character";
import Characters from "./components/Characters";
import CharactersFav from "./components/CharactersFav";

function App() {
  return (
    <div className="container">
      {/* Switch v5 */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" component={Home}  v5*/}
        <Route path="/characters" element={<Characters />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/favs" element={<CharactersFav />} />
      </Routes>
    </div>
  );
}

export default App;
