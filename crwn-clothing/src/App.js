import React from "react";
import "./App.css";
import { HomePage } from "./pages/home-page/HomePage";
import { Route, Switch } from "react-router-dom";

/*
  The Switch component from react-router makes 
  it such that only one component will be rendered
  upon finding an path match. So 

  Every Route component will pass our component 3 props.
  history, location and match

  We can make a an url param accessable, by using
  :randomParamName, e.g. path='topics/:topicId'.
  Then topicId can be accessed with 
  props.match.params.topicId

  We can use Link from react-router OR we can use 
  the history prop passed from the Route component.
  switching to an url would be done by invoking: 
  props.history.push('/path')
*/
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
