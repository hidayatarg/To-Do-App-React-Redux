import React, { Component } from 'react';
import Header from './components/header/';
import TaskBar from './components/tasbar/';
import TaskList from './components/tasklist/';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TaskBar />
        <TaskList />
      </div>
    );
  }
}

export default App;
