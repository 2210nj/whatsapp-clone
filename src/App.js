import React from "react";
import "./App.css";
import SideBar from "./SideBar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <SideBar />
        <Router>
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h1>welcome</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
