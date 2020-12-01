import React, { Component } from 'react';
import Chirp from './Chirp';


class Feed extends Component {
    render() {
        return this.props.feed.map((i) => (
            <Chirp key={i.key} user={i.user} message={i.message} />
        ));
    }
}

export default Feed;