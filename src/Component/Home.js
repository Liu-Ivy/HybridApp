import React, { Component } from 'react';
import axios from 'axios';
import SingleProfile from './SingleProfile'

class Home extends Component {
  state = {
    displays:[{
      name:'',
      id:'',
    }]
  }
  componentDidMount() {
    axios.get("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
    .then( display => {
      this.setState({displays: display.data})
      console.log(display.data.Brastlewark)
    })
  }
  render() {
    return (
      <div>
      <header>
         <h1>HybirdApp</h1>
         <input type="text" placeholder="Name"/>
         <button> Search </button>
         <button> More detials </button>
         {this.state.displays.map( (gnome) => {
           return <SingleProfile display={gnome}/>
         })}
        </header>
      </div>
    )
  }
}
export default Home
