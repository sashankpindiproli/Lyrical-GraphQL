import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

class SongsList extends Component
{
    renderSongs ()
    { 
        return this.props.data.songs.map( song =>
            <li key={ song.id } className="collection-item">
                { song.title }
            </li> )
    }

    render ()
    { 
        if ( this.props.data.loading ) { return <div>Loading...</div>}
        return ( <div>
            <ul className="collection">
                { this.renderSongs() }
            </ul>
            <Link to="/song/new" className="btn-floating btn-large red right">
                <i className="material-icons">add</i>
            </Link>
        </div> )
    }
}

export default graphql(query)(SongsList);
