import React ,{useEffect,useState} from 'react'
import axios from "axios"


function RecipeData() {
 const [data,setData]   =useState([])
 console.log(data)
    useEffect(()=>{fetchData()},[])
 const fetchData = async ()=>{
    const res =await axios.get("https://dummyjson.com/recipes")
  if(res.status===200){
    // console.log("love")
setData(res.data.recipes)

  }
    }
  
  return (
    <div>

    </div>
  )
}

export default RecipeData