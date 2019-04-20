import React, { PureComponent } from "react";
import Options from "./Options";
import "./App.css";

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: "."
    };
  }
  handleSelect(selected) {
    this.setState({ selected });
  }
  render() {
    return (
      <div className="App">
        <Options
          options={["Svelte", "React", "Vue", "Angular"]}
          onSelect={this.handleSelect.bind(this)}
        />
        <div>
          <div className="App-selected">{this.state.selected}</div>
          <img src="./logo.svg" className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}
