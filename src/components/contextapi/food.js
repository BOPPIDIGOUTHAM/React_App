import {useState} from "react";
import {createContext} from "react"
import B from "./B";
import C from "./c";
import D from "./d";

export const Context=createContext();
const FoodProvider=()=>{
const[food,setFood]=useState("fry picec biriyani")

    return(
        <Context.Provider  value={{food:food}}>
            <B/>
             <C/>
             <D/>
        </Context.Provider>
    );
};
export default FoodProvider;