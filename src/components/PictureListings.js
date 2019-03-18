import React, { Component } from 'react'
import Pictures from './Pictures'

export default class PictureListings extends Component {
    state = {
        filter: 'all',
    }

    handleFilterClick(filter) {
        console.log('Setting filter to: ', filter)
        this.setState({ filter })
    }

    render() {
        let picture = (this.state.filter === 'faves') ? this.props.faves : this.props.pictures
        
        const allPictures = picture.slice(0, 20).map(( picture ) => {
            return (
                <Pictures
                picture = { picture }
                key = { picture.id }
                onFaveToggle = {() => this.props.onFaveToggle(picture)}
                isFave = {this.props.faves.includes(picture)}
                />
              )
          })
        return(
            <div>

                <div className = 'picture-list-filters'>

                    <div className = {`picture-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}
                        onClick = {() => this.handleFilterClick('all')} > ALL
                        <span className = "section-count">{this.props.pictures.length}</span>
                    </div>

                    <div className = {`picture-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}
                        onClick = {() => this.handleFilterClick('faves')} > FAVES
                        <span className = "section-count">{this.props.faves.length}</span>
                    </div>

                </div>

                {allPictures}
            </div>
        )
    }
}