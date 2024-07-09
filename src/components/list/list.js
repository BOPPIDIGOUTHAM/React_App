import React from 'react'

function List() {
  const  arr=["orange","mango","apple","banana"]
  // const eache={styles:{color:"red"}}
  
//   console.log(arr)
  return (
    <div>
        
        {arr.map((each)=>{
            return <h1 style={{color:"red",fontSize:100}}>{each}</h1>}
            )}
    </div>
  )
}
 
export default List;