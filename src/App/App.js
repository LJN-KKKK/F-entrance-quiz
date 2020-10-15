import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  // TODO 需要联通前后端
  // TODO React 相关内容实现太少了，组件，state，生命周期等内容都没有实现
  render() {
    return (
      <div data-testid="app" className="App">
        <header className="header">
          <h1 className="title">分组列表</h1>
          {/* TODO 这里不用id，且这个命名更像是class名称，id需要更加明确 */}
          <div id="group-div">
            {/* TODO 这里不用使用submit type，本质上不是表单提交 */}
            <button id="group-button" type="submit">
              分组学员
            </button>
          </div>
        </header>
        <div className="group-info">
          {/* TODO 小组列表不是table，是list，所以所ul标签 */}
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
