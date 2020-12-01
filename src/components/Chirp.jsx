import { Component } from 'react';

class Chirp extends Component {
    render() {
        return (
            <div className="card mb-2">
                <div className="card-body">
                    <p className="ml-2 mb-0">{this.props.message}</p>
                    <h6 className="ml-3 mb-0">{this.props.user}</h6>
                </div>
                <div className="card-footer justify-content-end d-flex"><button className="btn btn-outline-secondary btn-sm">Admin Options</button></div>
            </div>
        );
    }
}

export default Chirp;