import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

console.log(process.env.REACT_APP_APIKEY)

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
