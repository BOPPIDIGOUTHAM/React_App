import React from 'react'
// import  RecipeData from "./components/recipes/RecipeData"
// import Weather from "./components/weather/weather"
// import List from './components/list/list'
import ButtonComponent from './components/button/button'
// import Heading1 from './components/headings/headings'
import { FakeData } from './components/data/data'
import ImageComponent from "./components/image/image"
import Heading1 from './components/headings/headings';
import { Heading3,Heading6 } from './components/headings/headings';
import CustomList from './components/list/list';
import { recipesData } from './components/Recipesdata';



const App=()=>{

  return(
    <div>
      {/* <CustomList list={["banana","orange","apple","grape"]}/>
      <CustomList list={["rcb","kkr","srk","mumbai"]}/>
      <CustomList list={["shark","golden","dolphin","whale"]}/>
      <Heading1 title={"ingredients to make pizza"} />
      <CustomList list={["Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste"]}/>
       <Heading1 title={"instrucions to make pizza"}/>
        <CustomList list={["Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot." ]}/> */}
        {
        recipesData.map(eachRecipe=>{
          const{name,image,instructions,ingredients,id }=eachRecipe
          return(
            <>
            <Heading1 title={`${id}${name}`}/>
            <ImageComponent src={image} width={100} height={100}alt={name}/>
            <Heading1 title={"ingredients to prepare"}/>
            <CustomList list={ingredients} />
            <Heading1 title={"instructions to prepare"}/>
            <CustomList list={instructions} />
            </>
          )
        })
        }

{/* 
 {FakeData.map((eachProduct)=>{
  return ( 
<> 
 <h3>{eachProduct.title}</h3>
<h3>{eachProduct.description}</h3> 
 <Heading1 title={eachProduct.title}/>
<Heading3 title={eachProduct.discription}/>
<ImageComponent src={eachProduct.image}
 width={100}
 height={100}
 alt={eachProduct.title}/>
 <ButtonComponent 
text={` $${eachProduct.price}`}
 bgColor="green" 
 height={40} 
 width={100}
 onPress={()=>{}}/>
  <Heading6> */}
    
  {/* <Heading1 title={eachProduct.title}/> */}
 {/* <h3>hello good morning</h3>  */}
{/* <h3>GouthamReddy</h3> */}

 {/* </Heading6>
 </>
  );
})}  */}
{/* <ButtonComponent 
text="login"
 bgColor="red" 
 height={100} 
 width={100}
 onPress={()=>{}}/>
 <ButtonComponent 
text="signup"
 bgColor="green" 
 height={100} 
 width={100}
 onPress={()=>{}}/> */}
    </div>
  );
}; 

export default App;
  
  



