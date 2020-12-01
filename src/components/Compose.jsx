import { Component } from 'react';

class Compose extends Component {
    constructor(){
        super();
        this.state = {
            inputValue: ""
        };
    }

    render() {
        return (
            <div className="card shadow p-3 mb-5 mt-3 p-2">
                <input type="text" placeholder="How would you like to Chirp?" onChange={this.props.update} />
                <div className="d-flex justify-content-end">
                    <button className="btn btn-outline-primary btn-sm mt-2" onClick={this.props.btnClick}>Chirp!</button>
                </div>
            </div>
        );
    }
}

export default Compose;