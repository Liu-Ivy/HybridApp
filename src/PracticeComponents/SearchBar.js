import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchInput: ""
  };

  handleChange = event => {
    const newInput = event.target.value;
    this.props.handleNewInput(newInput);
    this.setState({ searchInput: newInput });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Name"
          value={this.state.searchInput}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchBar;
