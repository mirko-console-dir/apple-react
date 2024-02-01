import { React, useState, useEffect } from "react";
/* connect to connect a component to the file store */
import { useSelector, connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/homepage/HomeLandingPage";
import About from "./components/about/About";
import "./App.css";

function App(props) {
  console.log(props);
  return (
    <>
      <div className="App">
        {/*  {todos.map((todo) => (
          <li key={todo.name}>{todo.name}</li>
        ))} */}
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}
/* connect(state ,action/payload/message to store) */
/* now the App have access to the store's dispatch(send message to the store) e subscribe method  */
export default connect()(App);
