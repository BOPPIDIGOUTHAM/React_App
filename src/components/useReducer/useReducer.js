import React, { useReducer } from 'react'

const reducerFunction=(state,action)=>{
   switch(action.type){
    case "counter1":
        return {...state,counter1:state.counter1+1} 
    case "counter2":
            return {...state,counter2:state.counter2-1};
    default:return{state};   
   }
}

const state={
    counter1:1,
    counter2:1
}


function UseReducer2() {
    const [currentState,dispatch]=useReducer(reducerFunction,state)
    const incrementHandler=()=>{
        dispatch({
         type:"counter1"

      })
     }
     const decrementHandler=()=>{
         dispatch({
         type:"counter2"
         
      })
     }
    console. log(" result")
  return (
    <>
    <h2>Counter 1 : {currentState.counter1}</h2>
    <h2>Counter 2 : {currentState.counter2}</h2>
    <button onClick={incrementHandler}>Increment count1</button>
    <button onClick={decrementHandler}>Decrement Count2</button>
    </>
  )
}

export default UseReducer2;
