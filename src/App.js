import React from 'react';
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="app__content">
        <SearchBar/>
      </div>
    </div>
  );
}

export default App;
