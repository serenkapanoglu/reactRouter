import React from "react";
import Nav from "./Nav";
import { BrowserRouter } from 'react-router-dom';
import RoutesList from "./RoutesList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;