import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Tabs from './components/Tab.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Website dengan 2 Tab</h1>
        <Tabs />
      </div>
    </Router>
  );
}

export default App;
