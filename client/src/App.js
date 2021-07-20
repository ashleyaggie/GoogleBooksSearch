import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

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
