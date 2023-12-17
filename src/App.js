import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import {Navbar} from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>This is my Home</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/cart" />
        </Routes>
      </Router>
    </div>
  );
}

export default App
