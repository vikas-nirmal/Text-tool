import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Body";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/></Switch>
      </Router>
    </div>
  );
}

export default App;
