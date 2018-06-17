import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddList from "./components/addList.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TODO List</h1>
        </header>
        <AddList />
         <div id="myModal" class="modal">
          <div class="modal-content">
            <span class="close">&times;</span>
            <p>Some text in the Modal..</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
