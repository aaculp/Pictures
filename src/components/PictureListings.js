import React, { Component } from 'react'
import Pictures from './Pictures'

export default class PictureListings extends Component {
    state = {
        filter: 'all',
    }

      handleFilterClick(filter) {
        console.log('Setting filter to: ', filter)
        this.setState({filter})
      }

    render() {
        let pictures = (this.state.filter === 'faves') ? this.props.faves : this.props.pictures
        const allPictures = this.props.pictures.slice(0, 10).map(( pictures ) => {
            return (
                <Pictures
                pictures = { pictures }
                key = { pictures.id }
                />
              )
          })
        return(
            <div className = 'picture-list'>
                <h1 className ='section-title'>Pictures</h1>

                <div className = 'picture-list-filters'>

                <div onClick={() => this.handleFilterClick('all')}>ALL
                <span className="section-count">{allPictures.length}</span>
                </div>

                <div onClick={() => this.handleFilterClick('faves')}>FAVES
                <span className="section-count">{allPictures.length}</span>
                </div>

                </div>
                {allPictures}
            </div>
        )
    }
}