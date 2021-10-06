import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchParticularSong';
import LyricList from './LyricList';
import LyricCreate from './LyricCreate';

class SongDetail extends Component {
    render () {
        const { song } = this.props.data;
        if ( !song ) { return <div /> }
        
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>{ song.title }</h3>
                <LyricList lyrics={ song.lyrics }/>
                <LyricCreate songId={ this.props.params.id } />
            </div>
        )
    }
}

export default graphql( query, {
    options: props => ( { variables: { id: props.params.id } } )
})(SongDetail);
