import React, { Component } from "react";
import Search from './Search';
import Table from './Table';
import logo from "./logo.svg";
import "./App.css";

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      searchTerm: 'react'
    };
  }

  removeItem = id => {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
  };

  onSearchChange = event => {
    console.log(event.target.value)
    this.setState({searchTerm: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Search 
            value = {this.state.searchTerm}
            changeMethod = {this.onSearchChange}
          />

          <Table 
            list = {this.state.list}
            searchTerm = {this.state.searchTerm}
            removeItem = {this.removeItem}
          />
        </header>
      </div>
    );
  }
}

export default App;
