import React, { Component } from 'react'

export default class Pictures extends Component {
    render() {
        return(
            <div>
                <p>{this.props.pictures.title}</p>
                <img src = {this.props.pictures.url} />
            </div>
        )
    }
}