import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import "./App.css";
import Header from "./Components/Header";
import Filtre from "./Components/Filtre";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Filtre />
    </div>
  );
}

export default App;
