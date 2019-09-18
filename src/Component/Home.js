import React, { Component } from 'react';
import axios from 'axios';
import SingleProfile from './SingleProfile';
import SearchComponent from './SearchComponent';
// import Profile from './Profile';

class Home extends Component {
  state = {
    // query:'',
    displays:[],
    filteredProfile:[],
    newInput: '',
  }

  componentDidMount() {
    axios.get("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
    .then( display => {
      this.setState({displays: display.data.Brastlewark})
    })
  }

  handleClick = (gnome) => {
    // this.setState({ displays: display.data.Brastlewark});
    console.log(gnome)
  }

  handleSearchBar = (input)=>{
    this.setState({newInput: input})
  }

  render() {
    let filteredDisplays = this.state.displays.filter(
      (display)=>{
        return display.name.toLowerCase().includes(this.state.newInput.toLowerCase());
      }
      );

    return (
      <div>
      <header>
         <h1>HybirdApp</h1>
         <SearchComponent searchInput={this.handleSearchBar}/>
         {/* <Profile handleClick={() => this.handleClick}/> */}
         {/* <button> Search </button> */}
         {/* <button> More detials </button> */}
         {filteredDisplays.map( gnome => 
            <SingleProfile display={gnome} key={gnome.id} handleClick={()=>{this.handleClick(gnome)}}/>
         )}
         {/* {this.state.displays.map( gnome => 
            <Profile display={gnome} key={gnome.id}/>
         )} */}
        </header>
      </div>
    )
  }
}
export default Home
