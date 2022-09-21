import React from "react";
import './App.css';

export default class App extends React.Component {
  state = {
    count: 0,
    isCounting: false 
  }

  componentDidMount(){
    console.log('componentDidMount');
    const useCount = localStorage.getItem('timer');
    if(useCount){
      this.setState({count : +useCount})
    }
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
    localStorage.setItem('timer' , this.state.count)
  }

  componentWillUnmount() {
    clearInterval(this.countId)
  }



  handleStart = () => {
    this.setState({isCounting: true})

    this.countId = setInterval(() => {
      this.setState({count: this.state.count + 1})
    } , 1000);
  }

  handleStop = () => {
    this.setState({isCounting: false})
    clearInterval(this.countId);
  }


  handleReset = () => {
    this.setState({isCounting: false , count: 0})
    clearInterval(this.countId);
  }
  render() { 
    return (
      <div className="App">
        <h1>REACT TIMER</h1>
        <p>{this.state.count}</p>
        {!this.state.isCounting ? (
          <button className="success" onClick={this.handleStart} >
            Start
          </button>
        ) : (
          <button className="danger" onClick={this.handleStop} >
            Stop
          </button>
        )}
        <button className="Secondary" onClick={this.handleReset} >
            Reset
        </button>
      </div>
    );
  }
}