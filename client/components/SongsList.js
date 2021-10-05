import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongsList extends Component
{
    renderSongs ()
    { 
        return this.props.data.songs.map( song => <li key={song.id} className="collection-item">{ song.title }</li>)
    }

    render ()
    { 
        if ( this.props.data.loading ) { return <div>Loading...</div>}
        return(<div> <ul className="collection">{this.renderSongs()}</ul> </div>)
    }
}
const query = gql`
    {
        songs {
            id
            title
        }
    }
`;
export default graphql(query)(SongsList);