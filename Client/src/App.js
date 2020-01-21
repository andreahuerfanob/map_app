import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import { Map, TileLayer } from "react-leaflet";
// import L from "leaflet";
import Webmap from "./components/Webmap";
import Geosearch from "./components/Geosearch";
// 20.49 on to make map
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Webmap />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
