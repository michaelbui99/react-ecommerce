import React from "react";
import "./App.css";
import { HomePage } from "./pages/home-page/HomePage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/ShopPage.jsx";

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

  history, location and match is only passed to 
  the component provided for the Route. Route
  wont pass them to the components children. 
  We could pass them to the children, which then 
  could pass them to their children, but this would
  lead to prop tunnelling/prop drilling, where we only
  pass props to then pass them further, which is bad.
  We can prevent this in routing with withRouter, which
  is an high order component, i.e. takes an component
  and then returns an modified version of that component.
*/
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
