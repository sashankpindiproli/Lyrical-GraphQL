import React, { Component } from 'react';

class LyricList extends Component
{
    onLike (lyricId)
    { 
        
    }
    renderLyrics () {
        return this.props.lyrics.map( ( { id, content } ) =>
            <li className="collection-item" key={ id }>
                { content }
                <i className="material-icons" onClick={ () => this.onLike(id) }>thumb_up</i>
            </li> )
    }
    render ()
    { 
        return ( <ul className="collection">{ this.renderLyrics() }</ul>)
    }
}

export default LyricList;
