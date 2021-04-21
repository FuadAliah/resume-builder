import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Application from "./Components/Application/Application";
import Data from "./Components/Application/Data";

import "./App.scss";
import "./Style/_input.scss";

function App() {
  return (
    <Router>
      <div className="App-header">
        <Switch>
          <Route exact path="https://fuadaliah.github.io/resume-builder/" component={Home}></Route>
          <Route path="/application" component={Application}></Route>
          <Route path="/data" component={Data}></Route>
          <Route path="*">
            <h2>404</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
