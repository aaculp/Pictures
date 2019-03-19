import React, { Component } from 'react';
import PictureListings from './components/PictureListings'

import axios from 'axios'
// import { connect } from 'react-redux'
// import { getData, handleFilter, handleToggle } from './store/actions/index'


export default class App extends Component {
  state = {
    pictures: [],
    faves: [],
  }

  // componentWillMount() {
  //   this.props.gettingData()
  // }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos `)
      .then((res) => {
        this.setState({
          pictures: res.data,
        })
      }).catch(err => console.log(err));
  }

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

// const mapStateToProps = state => ({
//   pictures: state.pictures.pictures,
//   faves: state.faves,
// })

// const mapDispatchToProps = dispatch => {
//   return {
//     gettingData: () => dispatch(getData()),
//     toggleFav: (picture) => dispatch(handleToggle(picture)),
//     toggleFilter: (filter) => dispatch(handleFilter(filter))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
