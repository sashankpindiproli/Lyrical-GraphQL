import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import mutation from '../queries/lyricCreate';

class LyricCreate extends Component
{ 
    onSubmit ( enterEvent ) {
        enterEvent.preventDefault();
        this.props.mutate( {
            variables: { content: this.state.content, songId: this.props.songId },
        } ).then( () => this.setState( {content: ''}))
    }

    constructor ( props ) {
        super( props );
        this.state = {
            content: ''
        }
    }
    
    render () { 
        return (
            <div>
                <form onSubmit={ (event) => this.onSubmit(event) }>
                    <label> Add Lyric </label>
                    <input
                        value={ this.state.content }
                        onChange={ inputEvent => this.setState({ content: inputEvent.target.value }) } />
                </form>
            </div> )
    }
}

export default graphql(mutation)(LyricCreate);
