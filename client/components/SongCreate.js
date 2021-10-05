import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchSongs';

class SongCreate extends Component
{
    constructor (props)
    {
        super( props );
        this.state = { title: ''}
    }
    onSubmit ( buttonPressEvent )
    {
        buttonPressEvent.preventDefault();
        this.props.mutate( {
            variables: { title: this.state.title },
            refetchQueries: [{ query }]
        }).then(() => hashHistory.push('/'))
    }
    
    render ()
    { 
        return (
            <div>
                <Link to="/">Back</Link>
                <h3> Create a new Song </h3>
                <form onSubmit={ (event) => this.onSubmit(event) }>
                    <label> Song Title:</label>
                    <input onChange={ userEvent => this.setState( { title: userEvent.target.value } ) } value={ this.state.title }/>
                </form>
            </div> )
    }
}

const mutation = gql`
mutation AddSong($title: String){
  addSong(title: $title) {
    id
    title
  }
}`

export default graphql(mutation)(SongCreate);
