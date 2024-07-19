import { Component } from "react"



class PracticeState extends Component{
    state={
        count:0
    }
    handlerIncrease=()=>{
        this.setState({
            count:this.state.count + 1
        })
    }
    handlerDecrease=()=>{
        if(this.state.count!=0){
            this.setState({
                count:this.state.count-1
                        })
        }
    }
   
    render(){
        return(
            <>
            <h1>count:  {this.state.count}</h1>
            <button onClick={this.handlerIncrease} style={{marginRight:"50px"}}>increase</button>
            <button onClick={this.handlerDecrease} style={{marginTop:"50px"}}>decrease</button>
            </>
        )
    }
    
}
export default PracticeState;