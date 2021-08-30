import {  BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Body />
      </Router>
    </div>
  );
}

export default App;
