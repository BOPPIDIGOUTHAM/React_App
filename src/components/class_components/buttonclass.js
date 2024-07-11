import React from "react";
import {Component} from "react";
// import Card from "../card/card";


class ButtonComponentClass extends Component{

     state={
        text1:"subscribe",
        text2:"subscribed",
        isSubscribe:false,

     };
     subcribeHandler=()=>{
        console.log("button clicked")
this.setState({
    isSubscribe:! this.state.isSubscribe,
});
console.log(this.state.isSubscribe,"outside the setState ")
     };

render(){
        return(
        <React.Fragment>
        <button onClick={this.subcribeHandler}>
            { this.state.isSubscribe ?this.state.text2: this.state.text1}
        </button>

        {
            this.state.isSubscribe?
            
            <h2>thanks for subscribing, enjoy the premium content </h2>:
            <h2>please subscribe to access the premium content </h2>
            
            
            
            
        }
            </React.Fragment>
          
        )
                 
    }
    
}
export default  ButtonComponentClass;