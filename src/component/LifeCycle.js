
import React ,{Component} from 'react';

class LifeCycle extends Component { 

  state = { 
    number: 0 
  } 

  constructor(props) { 
    super(props); 
    console.log('constructor'); 
  } 

  componentDidMount() { 
    console.log('componentDidMount'); 
  } 

  shouldComponentUpdate(nextProps, nextState) { 
    console.log('shouldComponentUpdate'); 
    if (nextState.number % 5 === 0 && nextState.number !== 0) return false; 
    return true; 
  } 

  componentDidUpdate(prevProps, prevState) { 
    console.log('componentDidUpdate'); 
  } 

  increaseButton = () => { 
    console.log("----increseButton----");
    const { number } = this.state; 
    this.setState({ 
      number: number + 1 
    }); 
  } 

  decreaseButton = () => { 
    console.log("----decreaseButton----");
    this.setState( 
      ({ number }) => ({ 
        number: number - 1 
      }) 
    ); 
  } 

  render() { 
    console.log('render'); 

    return ( 
      <div> 
        <h1>카운터</h1> 
        <div>값: {this.state.number}</div> 
        <button onClick={this.increaseButton}>+</button> 
        <button onClick={this.decreaseButton}>-</button> 
      </div> 
    ); 
  } 
} 

export default LifeCycle; 
