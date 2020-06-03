import React, { Component } from "react";
import axios from "axios";
import SingleProfile from "../Components/SingleProfile/SingleProfile";
import SearchBar from "./SearchBar";

class Home extends Component {
  state = {
    display: [],
    newInput: "",
    selectedId: null
  };

  componentDidMount() {
    axios
      .get(
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
      )
      .then(allGnomes =>
        this.setState({ displays: allGnomes.data.Brastlewark.splice(3, 33) })
      );
  }

  handleNewInput = input => {
    this.setState({ newInput: input });
  };

  handleSelectedId = id => {
    this.state.selectedId === id
      ? this.setState({ selectedId: null })
      : this.setState({ selectedId: id });
  };

  render() {
    let filteredDisplay = this.state.displays.filter(display =>
      display.name
        .toLowerCase()
        .includes(this.state.newInput.toLocaleLowerCase())
    );
    return (
      <div>
        <SearchBar handleNewInput={this.handleNewInput} />
        {filteredDisplay.map(gnome => (
          <SingleProfile
            display={gnome}
            selectedId={this.state.selectedId}
            handleSelectedId={this.handleSelectedId}
          />
        ))}
      </div>
    );
  }
}

export default Home;
