import "./App.css";
import img from "./breaking-bad.svg";

function App() {
  return (
    <div className="container">
      <h1>REPASO M2</h1>
      <img src={img} alt="breaking bad" style={{ width: "300px" }} />
      <h2>Aplicación creada con React, Redux y React Router DOM</h2>
      <h3>TAs:</h3>
      <div className="flex">
        <p>José Mella</p>
        <p>Leandro Morales</p>
      </div>
    </div>
  );
}

export default App;
