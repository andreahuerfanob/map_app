import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { Map, TileLayer } from "react-leaflet";
import L from "leaflet";

import Basemap from "./components/Basemap";


// 20.49 on to make map 
function App() {
  return (
    <Router>
      <switch>
      <Route exact path="/">
        <Basemap/>
        </Route>
        </switch>
        </Router>
  );
}

export default App;
