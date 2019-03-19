import React, { Component } from 'react';
import PictureListings from './components/PictureListings'

// import axios from 'axios'
import { connect } from 'react-redux'
import { getData } from './store/actions/actions'


class App extends Component {
  state = {
    pictures: [],
    faves: [],
  }

  componentWillMount() {
    // this.props.getData()
  }
  // componentDidMount() {
  //   axios.get(`https://jsonplaceholder.typicode.com/photos `)
  //     .then((res) => {
  //       this.setState({
  //         pictures: res.data,
  //       })
  //     }).catch(err => console.log(err));
  // }

  handleFaveToggle(picture) {
    const faves = this.state.faves.slice()
    const pictureIndex = faves.indexOf(picture)

    if(pictureIndex > -1) {
      console.log('picture is removed in Favorites')
      faves.splice(pictureIndex, 1)
    } else {
      console.log('picture added to favorites')
      faves.push(picture)
    }
    this.setState({ faves })
    console.log('this is variable', faves)
    console.log('this is state', this.state.faves)
    console.log(pictureIndex)
  }


  render() {
    return (
      <div className="picture-library">
        <PictureListings 
          pictures = { this.state.pictures }
          faves = { this.state.faves }
          onFaveToggle = {(picture) => this.handleFaveToggle(picture)}
        />
      </div>
    );
  }
}

export default connect(null, {getData})(App);
