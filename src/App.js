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
      chirpCount: 3
    }; 
  }

  handleChange = (e) => {
    this.setState({ placeholder: e.target.value});
  }

  addChirp = () => {
    let newChirp = {
      key: this.state.chirpCount,
      user: "Random User #" + Math.floor(Math.random() * 1000),
      message: this.state.placeholder
    }

    this.setState({
      chirps: [...this.state.chirps, newChirp]
    });
    this.setState({
      chirpCount: this.state.chirpCount + 1
    });

  }

  render() {
    return (
      <>
        <nav>
          Home - Chirp - Account
        </nav>
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
