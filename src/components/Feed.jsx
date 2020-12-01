import React, { Component } from 'react';
import Chirp from './Chirp';

class Feed extends Component {
    adminOptions = () => {
        alert("I don't work yet.")
    }

    render() {
        return this.props.feed.map((i) => (
            <Chirp key={i.key} user={i.user} message={i.message} admin={this.adminOptions} />
        ));
    }
}

export default Feed;