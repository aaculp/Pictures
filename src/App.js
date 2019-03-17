import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Pictures from './components/Pictures'

class App extends Component {
  state = {
    pictures: [],
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
    const allPictures = this.state.pictures.slice(0, 10).map(( pictures ) => {
      return (
          <Pictures
          {...this.props}
          pictures = { pictures }
          key = { pictures.id }
          />
        )
    })
    return (
      <div className="App">

        <h1>Showing the Pictures</h1>
        <div>
          { allPictures }
        </div>

      </div>
    );
  }
}

export default App;
