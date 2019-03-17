import React, { Component } from 'react';
import axios from 'axios'
import PictureListings from './components/PictureListings'

class App extends Component {
  state = {
    pictures: [],
    faves: [],
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos `)
      .then((res) => {
        this.setState(prevState => ({
          pictures: res.data,
        }))
        console.log(this.state.pictures)
      }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <PictureListings 
          pictures = {this.state.pictures}
          faves = {this.state.faves}
          onFaveToggle={(picture) => this.handleFaveToggle(picture)}
        />
      </div>
    );
  }
}

export default App;
