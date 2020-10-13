import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <header className="header">
          <h1 className="title">分组列表</h1>
          <div id="group-div">
            <button id="group-button" type="submit">
              分组学员
            </button>
          </div>
        </header>
        <div className="group-info">
          <table className="group-tables">
            <tr>
              <th id="group-name">11</th>
            </tr>
          </table>
        </div>
        <div>
          <h2 className="members-name">学员列表</h2>
        </div>
      </div>
    );
  }
}

export default App;
