import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/searchBar";
import ItemsWrapper from "./components/itemsWrapper";

class App extends Component {
  render() {
    return (
      <div className="App">
          <SearchBar />
          <ItemsWrapper />
      </div>
    );
  }
}

export default App;
