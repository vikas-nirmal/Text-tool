import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import "./App.css";
import Tool from "./Components/Body";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
        <Route path='/' exact component={Tool}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
