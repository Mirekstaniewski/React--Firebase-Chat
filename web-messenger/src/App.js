import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/HomePage/LoginPage";
import RegisterPage from "./containers/HomePage/RegisterPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path=" / " component={HomePage} />
        <Route path=" /login " component={LoginPage} />
        <Route path=" /signup " component={RegisterPage} />
      </Router>
    </div>
  );
}

export default App;
