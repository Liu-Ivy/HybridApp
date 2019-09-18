import React, { Component } from 'react';
import axios from 'axios';
import SingleProfile from './SingleProfile';
import SearchComponent from './SearchComponent';

class Home extends Component {
  state = {
    displays:[],
    newInput: '',
  }

  componentDidMount() {
    axios.get("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
    .then( display => {
      this.setState({displays: display.data.Brastlewark})
    })
  }

  handleSearchBar = (input)=>{
    this.setState({newInput: input})
  }

  render() {
    let filteredDisplays = this.state.displays.filter(
      (display)=>{
        return display.name.includes(this.state.newInput) !== 1;
      }
      );

    // const { displays } = this.state
    // displays ? console.log(displays[0].name) : null

    return (
      <div>
      <header>
         <h1>HybirdApp</h1>
         <SearchComponent searchInput={this.handleSearchBar}/>
         {/* <button> Search </button> */}
         {/* <button> More detials </button> */}
         {filteredDisplays.map( gnome => 
            <SingleProfile display={gnome} key={gnome.id}/>
         )}
        </header>
      </div>
    )
  }
}
export default Home
