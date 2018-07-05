import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/searchBar";
import ItemsWrapper from "./components/itemsWrapper";
import ViewMode from "./components/viewMode";

class App extends Component {
  render() {
    return (
      <div className="App">
          <SearchBar />
          <ViewMode/>
          <ItemsWrapper />
      </div>
    );
  }
}
export default App;
