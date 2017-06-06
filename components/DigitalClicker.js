import React from 'react';
import ReactDOM from 'react-dom';



export default class DigitalClicker extends React.Component{
  constructor(){
    super();
    this.mariKatz = this.mariKatz.bind(this)
    this.state = {
      timesClicked: 0
    }
  }
  mariKatz(event){
    this.setState({
      timesClicked: this.state.timesClicked += 1
    })
    }

  render(){
    return(
      < button onClick={this.mariKatz} label={this.state.timesClicked}>{this.state.timesClicked}</button>
    )}


}
