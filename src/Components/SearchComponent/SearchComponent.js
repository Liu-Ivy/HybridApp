import React, { Component } from 'react';
import "./SearchComponent.scss";

class SearchComponent extends Component {
  state={
    inputSearch: '',
  }

  handleSearchBar = (event) => {
    const newInput = event.target.value;
    this.props.searchInput(newInput);
    this.setState({ inputSearch: newInput })
  }
  
  render() {
    return (
      <div>
      <input type="text" className="search-field" placeholder="Search by Name" 
        value={this.state.inputSearch} 
        onChange={this.handleSearchBar}/>
     </div>
    )
  }
}

export default SearchComponent