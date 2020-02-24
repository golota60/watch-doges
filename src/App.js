import React from 'react';
import './App.scss';
import './styles.scss';
import RenderImage from './RenderImage.js';

class App extends React.Component {
  state = {
    imgURL: '',
    endpoint: 'api/shibes',
  };

  fetchData = async () => {
    const data = await fetch(
      `https://cors-anywhere.herokuapp.com/http://shibe.online/${this.state.endpoint}`,
    );
    const json = await data.json();
    this.setState({
      imgURL: json,
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  buttonClick = async type => {
    await this.setState({
      imgURL: '',
      endpoint: type,
    });
    this.fetchData();
  };

  render() {
    return (
      <div className="App">
        <div>
          <button
            className="fuller-button pink"
            onClick={() => this.buttonClick('api/shibes')}
          >
            I WANT SHIBE!
          </button>
          <button
            className="fuller-button pink"
            onClick={() => this.buttonClick('api/cats')}
          >
            I WANT CATE!
          </button>
        </div>
        {this.state.imgURL !== '' ? (
          <div>
            <RenderImage URL={this.state.imgURL}></RenderImage>
          </div>
        ) : (
          <div>
            <div className="loader">Loading...</div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
