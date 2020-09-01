import React from 'react';
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="app__content">
        <SearchBar/>
        <Filter/>
      </div>
    </div>
  );
}

export default App;
