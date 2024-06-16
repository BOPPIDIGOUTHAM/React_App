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

 const App=()=>{
   return(
   <div class="app">
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
       <Heading6></Heading6>
       

       <ListParentOrder
        <ListParentUnordered/>  
         <Card></Card>
         <Card></Card>
         <Card></Card> 



<TableCreation/>


   </div>
  );
 };
 export default App;
