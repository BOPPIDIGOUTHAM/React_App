import { Component } from "react";

class CustomState extends Component {
  state={
    count:0
  }
  handleIncrease=()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  render(){
    return(
        <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.handleIncrease}>Increase</button>
        </div>
    )
  }
}

export default CustomState;