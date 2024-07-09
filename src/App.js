import React from 'react'
// import  RecipeData from "./components/recipes/RecipeData"
// import Weather from "./components/weather/weather"
// import List from './components/list/list'
import ButtonComponent from './components/button/button'
// import Heading1 from './components/headings/headings'
import { FakeData } from './components/data/data'
import ImageComponent from "./components/image/image"
import Heading1 from './components/headings/headings';
import { Heading2 } from './components/headings/headings';

const App=()=>{

  return(
    <div>

 {FakeData.map((eachProduct)=>{
  return ( 
<> 
 <h3>{eachProduct.title}</h3>
<h3>{eachProduct.description}</h3> 
 <Heading1 title={eachProduct.title}/>
<Heading2 title={eachProduct.discription}/>
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
 </>
  );
})} 
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
  
  



