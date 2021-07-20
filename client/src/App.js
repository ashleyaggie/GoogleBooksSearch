import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Header from "../src/components/Header";
import Search from "../src/pages/Search";
import Saved from "../src/pages/Saved";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
