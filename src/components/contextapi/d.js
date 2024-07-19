import { useContext } from "react";
import { Context } from "./food";

function D(){

const FoodVar=useContext(Context)
    return (
        <h1>{FoodVar.food}</h1>
    )

}


export default D;