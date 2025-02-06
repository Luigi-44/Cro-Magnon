import { Outlet } from "react-router-dom";
import "./App.css";
import Filtre from "./Components/Filtre/Filtre";
import Tableux from "./Components/Tableaux/Tableux";
import { useState } from "react";
import Footer from "./Components/Footer/Footer";

function App() {
  const [filtreActif, setFiltreActif] = useState("All");
  return (
    <div>
      <Outlet />
      <Filtre filtreActif={filtreActif} setFiltreActif={setFiltreActif} />
      <Tableux filtreActif={filtreActif} />
      <Footer />
    </div>
  );
}

export default App;
