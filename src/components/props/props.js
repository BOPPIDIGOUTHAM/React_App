// const Propcomponent = (props)=>{
//     //  console.log(props.data.name ,props.data.age)
// console.log(props.data)
//     const {name,age}=props.data
//     console.log(name,age)
//     return<div>
//     <h1>This is Propcomponent {name}{age}</h1>
//     {/* <img src={props.src}/> */}
//     </div>

// }
// export default Propcomponent


import React from "react"
class ClsProp extends React.Component{
    constructor(props){
        super(props);
      const {name,age}=this.props
      this.state={
        value:`${name} ${age}`
      }
      
    //   console.log(myname,myage)
    }
    render(){
        return<div>This class componet{this.state.value}</div>
    }
}
export default ClsProp;