import React, { Component } from "react";

class SingleInfo extends Component {
  state = {
    showInfo: false
  };

  handleClick() {
    // this.setState({ showInfo: !this.state.showInfo });
    this.props.handleSelectedId(this.props.display.id);
  }

  render() {
    const { name, id, professions } = this.props.display;
    return (
      <div
        onClick={() => {
          this.handleClick();
        }}
      >
        {this.props.selectedId === id ? (
          <h3>{name}</h3>
        ) : (
          <>
            <h3>{name}</h3>
            <h3>{id}</h3>
            {professions.map(profession => (
              <p>{profession}</p>
            ))}
          </>
        )}
      </div>
    );
  }
}

export default SingleInfo;
