import React, { Component } from 'react'
import toggleIcon from '../common/toggleIcon';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turnedOn: true
    }
  }

  componentDidMount() {
    chrome.storage.sync.get('turnedOn', ({ turnedOn }) => {
      this.setState({ turnedOn });
    });
  }

  handleChange = (e) => {
    const { checked: turnedOn } = e.target;

    chrome.storage.sync.set({ turnedOn });
    this.setState({ turnedOn });
    toggleIcon(turnedOn)
  }

  render() {
    const { turnedOn } = this.state;
    return (
      <React.Fragment>
        <p>
          <label htmlFor="turnedOn">
            <input type="checkbox" id="turnedOn" checked={turnedOn} onChange={this.handleChange} />
            &nbsp;&nbsp;Включити ruTanos
          </label>
        </p>
      </React.Fragment>
    )
  }
}
