import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from '../src/components/Navbar/Navbar';
import Upload from './components/Upload/Upload'


function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
    </Router>
    <Upload />
    </div>
  );
}

export default App;
