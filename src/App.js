import ImageComponent from "./components/image/image";
// import  DemoCarousel  from "./components/Carousel/Carousel";
// import Table from "./components/table/table2";
// import Form from "./components/form/form";
import fakeData  from "./components/javascript/data";
// import CustomState from "./components/class/state";
// import AddComponent from "./components/class_components/state";
// import PracticeState from "./components/class_components/practicestate";
import { Heading1, Heading3} from "./components/headings/headings";
const App =()=>{
   return(
<div>
 
 {/* <Table/>
<Form/>  */}
{
fakeData.map((eachProduct)=>{
return(
<>
<Heading1 title={eachProduct.title}></Heading1>
<Heading3 title={eachProduct.description}/>
{/* <h3>{eachProduct.title}</h3>
<h3>{eachProduct.description }</h3> */}
<ImageComponent src={eachProduct.image} width={100} height={100} alt={eachProduct.title}/>
</>
)
}) 
 }



{/* 
<ImageComponent src={"https://www.m9.news/wp-content/uploads/2023/01/Balayya-Veera-Simha-Reddy-1.jpg"}/>
<ImageComponent src={"https://www.deccanchronicle.com/h-upload/2024/02/24/1076897-ezgif-4-00c5c2b0b6.webp"}/>
<AddComponent />
<CustomState />
<PracticeState/> */}
</div>
)}
export  default App;