import React, { Component } from 'react'

export default class Pictures extends Component {
    render() {
        return(
            <div className = 'pictureContainer'>
                <p className = 'pictureText'>{this.props.pictures.title}</p>
                <img src = {this.props.pictures.url} alt ='' className = 'picture'/>
            </div>
        )
    }
}