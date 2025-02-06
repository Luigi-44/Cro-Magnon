import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
