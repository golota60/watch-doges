import React from 'react';
import './App.css';
import { Button, Spinner } from 'reactstrap';
import RenderImage from './RenderImage.js';

class App extends React.Component{
  state={
    imgURL:'',
  }

  fetchData = async() => {
    const data = await fetch('https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes');
    const json = await data.json();
    this.setState({
      imgURL:json,
    })
  }

  componentDidMount(){
    this.fetchData();
  }

  buttonClick = () => {
    this.setState({
      imgURL:'',
    })
    this.fetchData();
  }

  render(){
    return(
      <div className='App'>
        <div>
          <Button color='success' className='_button' onClick={this.buttonClick}>
            I want new shibe!
          </Button>
        </div>
        {this.state.imgURL!=='' ? (<div>
          <RenderImage URL={this.state.imgURL}></RenderImage>
        </div>) : (<div>
          <Spinner color="success" />
        </div>)}
      </div>
    );
  }
}

export default App;
