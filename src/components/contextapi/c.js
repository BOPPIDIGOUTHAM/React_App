import{useContext} from "react";
import { Context } from "./food";




function C(){

    const FoodVar=useContext(Context)


    return(
        <h1>{FoodVar.food}</h1>
    )
}
export default C;