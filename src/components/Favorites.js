import React, { Component } from 'react';

export default class Favorites extends Component {
    handleClick(e){
        e.stopPropagation()
        this.props.onFaveToggle(this.props.picture)
      }

    render() {
        const isFave = (this.props.isFave) ? 'Remove from Favorites' : 'Add to Favorites'
        return(
        <div onClick = {(e) => this.handleClick(e)}>
            <p>{isFave}</p>
        </div>
      )
    }
}