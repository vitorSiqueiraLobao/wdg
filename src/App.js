import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";
function App() {
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css?family=Montserrat');
      </style>
      <Router >
        <Routes />
      </Router>
    </>
  );
}

export default App;
