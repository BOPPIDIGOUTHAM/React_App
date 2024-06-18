import ButtonComponent from "./components/button/button.js";
import { Heading1,
         Heading2,
         Heading3,
         Heading4,
         Heading5,
         Heading6
        }from "./components/headings/headings.js";


import{ListParentOrdered,ListParentUnordered} from "./components/list/list.js"

import  ImageComponent  from "./components/image/image.js";

import Card from "./components/card/card"
import TableCreation  from "./components/table/table.js";
 import BasicExample from "./components/card2/card2.js";
import VariationsExample from "./components/button/button_bootstrap.js"
 const App=()=>{
        const greeting ="Good morning Goutham";
   return(
   <>
 {/* <h1>hiiiiiiiiiiiiiiiiiiiiiiii</h1>
    <BasicExample/>
       <ImageComponent/>
       <h2>hello goutham</h2>
       <ButtonComponent></ButtonComponent>
     <ImageComponent/>
     <h2>hello goutham</h2>
    <ButtonComponent></ButtonComponent>
  <ButtonComponent></ButtonComponent>
      <h2>hello react </h2>

      <ButtonComponent></ButtonComponent>      
       <ButtonComponent></ButtonComponent>
      <Heading1></Heading1>
      <Heading2></Heading2>
       <Heading3></Heading3>
       <Heading4></Heading4>        
       <Heading5></Heading5>
       <Heading6></Heading6> */}
       <VariationsExample/>

       {/* <ListParentOrdered/>
      <ListParentUnordered/> 
          <h3>Hai 3:00pm code commit</h3>
          <h3>{greeting}</h3>
          {[1].map((num,index)=>  (
                 <Card key={index}></Card>
                 ))}



                 {false? <Card></Card> :<h1>hello Goutam</h1> }     
       
        
        
        
        
         <Card></Card> 
         <Card></Card>
        <Card></Card> 



 <TableCreation/>  */}


   </>
  );
 };
 export default App;
