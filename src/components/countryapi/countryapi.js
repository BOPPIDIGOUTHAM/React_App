import {useEffect,useState} from "react";
import axios from 'axios'


const CountryListing=()=>{
  const[countries,setcountries]=useState([])
  // const[selectedCountry,setSelectedCountry]=useState([null])
  useEffect(()=>{
    fetchData();
  },[])


  const fetchData=async()=>{
    const response=await axios.get("https://restcountries.com/v3.1/all")
    console.log(response,"response")
  //  const result= nameExtractor(response.data)
  //  console.log(result,"result")
  //  setcountries(result);
  };


  // const nameExtractor=(data)=>{
  //   return data.map((each)=>each.name.official);

  // };
  // const selectCountryHandler=(event)=>{
  //   setSelectedCountry(event.target.value)
  //   console.log(event.target.value)
// 
  // }       
// 


  return(
    <>
    <h1>countryListing</h1>
    {/* <select value={selectedCountry} onChange={selectCountryHandler} >
     {countries.map(eachCountry=>(
        <option value={eachCountry}>{eachCountry}</option>
        ))}
 
    </select> */}
    
    </>
  );
};
export default CountryListing;