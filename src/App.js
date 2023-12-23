import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Shop } from './Pages/Shop/Shop';
import { Cart } from './Pages/Cart/Cart';
import { ShopContextProvider } from './Context/ShopContext';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App
