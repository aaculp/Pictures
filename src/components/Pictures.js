import React, { Component } from 'react'
import Favorites from './Favorites'

export default class Pictures extends Component {
    render() {
        return(
            <div 
            className = 'pictureContainer'
            >
                <img src = {this.props.picture.url} alt ='' className = 'picture'/>
                <p className = 'pictureText'>{this.props.picture.title}</p>

                <Favorites
                    onFaveToggle = {(picture) => this.props.onFaveToggle(picture)}
                    isFave = {this.props.isFave}
                />
            </div>
        )
    }
}