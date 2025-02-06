import { Outlet } from "react-router-dom";
import "./App.css";
import Filtre from "./Components/Filtre";
import Tableux from "./Components/Tableux";
import { useState } from "react";

function App() {
  const [filtreActif, setFiltreActif] = useState("All");
  return (
    <div>
      <Outlet />
      <Filtre filtreActif={filtreActif} setFiltreActif={setFiltreActif} />
      <Tableux filtreActif={filtreActif} />
    </div>
  );
}

export default App;
