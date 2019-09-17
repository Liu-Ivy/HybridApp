import React , { Component }from 'react';
import axios from 'axios';
import SingleProfile from './Component/SingleProfile'


class App extends Component {
  state = {
    displays: {
      name:'',
      id:'',
    }
  }
  componentDidMount() {
    axios.get(`https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json`)
    .then( displays => {
      this.setState({ displays: displays.data.Brastlewark})
      // console.log(displays.data)
      // console.log(displays.data.Brastlewark)
      // console.log(displays.data.Brastlewark[0].name)

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
         <SingleProfile display={this.state.displays}/>
        
      
        </header>
      </div>
    );
  }
}

export default App;
