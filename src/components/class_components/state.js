import { Component } from "react";
class AddComponent extends Component{
    state={
        a:20,
        b:10,
        result:0,
        click:false
    };
    clicked=()=>{
        // console.log("clicked",this.state.result,this.state.click)
        this.setState({
            click:!this.state.click,
            result:this.state.a + this.state.b
        })
    }
    render(){
        return(
            <div>
                {/* <h1>a+b={this.state.result}</h1> */}
                <button onClick={this.clicked}>Click Me</button>
                {
                    this.state.click ? <h1>a+b={this.state.result}</h1> : <h1>a+b=0</h1>
                }
            </div>
        )
    };
    
}
export default AddComponent