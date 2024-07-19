import  { Component } from "react"
import Heading1 from "../headings/headings";
// import ButtonComponent from "../button/button";

class TodoComponent extends Component{
  state={
    todos:["wake up at 7:00am","Eat breakfast at 8:00am"]
  };
 todoHandler=()=>{
this.setState({
   todos:[...this.state.todos,"Attend online class at 10am"] 
})
}
UpdateHandler=(index)=>{
    console.log(index,this.state.todos)
};

DeleteHandler=(index)=>{};
    render(){
        return(
            <>
            <Heading1 title="list of Todos" />
            <ol>
            {this.state.todos.map((eachtodo,index)=>{
                return( <div  key={index}>
                <li>{eachtodo}</li>
                <button onClick={()=>this.UpdateHandler(index)}>update</button>
                <button onClick={()=>this.DeleteHandler(index)}>Delete</button>
                </div>)
            })}
            </ol>
            <button onClick={this.todoHandler}>add todo</button>
            </>
        )
    }
}
export default TodoComponent;