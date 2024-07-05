import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RecipeTable from './RecipeTable'

const RecipeData = () => {
    // const[data,setData]=useState([])
    // console.log(useState("hii"))
    const [data,setData]=useState([])
    console.log(data)
    

    useEffect(()=>{ fetchdata()},[])
    const fetchdata =async()=>{
        // console.log("helloo")
        const res=await axios.get("https://dummyjson.com/recipes")
    //    console.log(res.status)
        if(res.status===200){
           setData(res.data.recipes)
        }
     }
    
  return (
    <>
    <div>RecipeData</div>
   <RecipeTable recipedata={data}/>
   </>
    
  )
}

export default RecipeData