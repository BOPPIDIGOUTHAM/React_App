
import  {useState} from "react"




const EvenChecker = () => {

const[counter1,setcounter1]=useState(1);
const[counter2,setcounter2]=useState(0);
const[isLogin,setIsLogin]=useState(false)
const counter1Handler=()=>{
    setcounter1(counter1+1);
};
const counter2Handler=()=>{
    setcounter2(counter2+1);
};

const isEven =()=>{
    console.log("is even executing.......")
    for(let i=0;i<10000;i++){}
    return counter1 % 2 ===0 ?"EVEN":"ODD"
}


    return(

        <>
        <h3>Even checker</h3>
        <h3>counter-1  value {counter1}   {isEven()}   </h3>
        <h3>counter-2 value {counter2}</h3>
        <button class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded" onClick={counter1Handler}>increase count-1</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded" onClick={counter2Handler}>increase count-2</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded" onClick={()=>setIsLogin(!isLogin)}>change Login</button>
        {isLogin?<h1>welcome user</h1>:<h1>please Login</h1>}
        </>
    );
};
export default EvenChecker;