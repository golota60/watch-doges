import React from 'react';
import './App.css';
import { Button, Spinner } from 'reactstrap';
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
          <Button
            color="success"
            className="_button"
            onClick={() => this.buttonClick('api/shibes')}
          >
            I want new shibe!
          </Button>
          <Button
            color="success"
            className="_button"
            onClick={() => this.buttonClick('api/cats')}
          >
            I want cate!
          </Button>
        </div>
        {this.state.imgURL !== '' ? (
          <div>
            <RenderImage URL={this.state.imgURL}></RenderImage>
          </div>
        ) : (
          <div>
            <Spinner color="success" />
          </div>
        )}
      </div>
    );
  }
}

export default App;
