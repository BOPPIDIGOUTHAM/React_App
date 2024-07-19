
import { useContext } from "react";
import { Context } from "./food";

function B(){

const FoodVar=useContext(Context)
console.log(" context",FoodVar)
    return (
        <h1>{FoodVar.food}</h1>
    )

}


export default B;
