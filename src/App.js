import { Component } from 'react';
import Feed from './components/Feed';
import Compose from './components/Compose';

class App extends Component {
  constructor() {
    super();

    this.state = {
      chirps: [
        {
          key: 0,
          user: "Brandon",
          message: "Does anyone have an extra sno-mobile?"
        },
        {
          key: 1,
          user: "Tony",
          message: "Here's what you do... wrap it in some twine then coat it in shelack."
        },
        {
          key: 2,
          user: "Jesse",
          message: "Did Brandon just say he needs a sno-mobile?"
        }
      ],
      chirpCount: 3 // I do not know how to make this dynamic. Help? --
    }; 
  }

  handleChange = (e) => {
    this.setState({ placeholder: e.target.value});
  }

  addChirp = () => {
    let newChirp = {
      key: this.state.chirpCount,
      user: "Random User #" + Math.floor(Math.random() * 666),
      message: this.state.placeholder
    }

    this.setState({
      chirps: [...this.state.chirps, newChirp]
    });
    this.setState({
      // Logic for incrementing the Key property inside of the chirps[] State array --
      chirpCount: this.state.chirpCount + 1 // The ++ shorthand did not work, but this did. Help? --
    });

    // How could I clear the form input value on this event? --

  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col-12">
            <Feed feed={this.state.chirps}></Feed>
          </div>
        </div>
        <div className="col-12">
          <Compose btnClick={this.addChirp} update={this.handleChange}></Compose>
        </div>
      </>
    );
  }
}

export default App;