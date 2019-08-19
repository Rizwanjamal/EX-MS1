import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  
  constructor(props) {
    super(props);
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
  
    this.state = {
      list: list,
    };
  }
  
  changeState = () => {
    const list = [
      {
        title: "Redux",
        url: "https://github.com/reactjs/redux",
        author: "Dan Abramov, Andrew Clark",
        num_comments: 2,
        points: 5,
        objectID: 1
      }
    ];
    console.log('changeState called !')
    this.setState({list: list})
  }
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.list.map((item) => {
            return (
              <div key={item.objectID}>
                <span>
                  <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
              </div>
            );
          })}
          <a
            className="App-link"
            onClick= {() => this.changeState()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Change State
          </a>
        </header>
      </div>
    );
  }
}

export default App;
