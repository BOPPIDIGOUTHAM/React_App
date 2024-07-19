import {Component} from 'react'
import CustomSpinner from '../../customspinner/customspinner';



class ProductListing extends Component{
    state={
        productlistng:["herh"],
        loading:false,
        errors:null
    };

componentDidMount(){
    console.log("ComponentDidMount invoked...")
this.fetchData()
    
    }
    // fetchData=()=>{

        // this.setState({
        //     loading:true,
        // });

    //     fetch('https://fakestoreapi.com/products')
    // .then((response)=>response.json())
    // .then((response)=>{
    //     this.setState({
    //        productListing:response ,
    //        loading:false,
    //     });

    // });
    // };

    fetchData=async()=>{

        this.setState({
            loading:true,
        });
        try{
       const response1= await fetch('https://fakestoreapi.com/products')
       const finalResponse=await response1.json();

       this.setState({
               productListing:response ,
               loading:false,
            });
    }catch(err){
        console.error(err)
    }
    }
    render(){
console.log("render invoked...");
        return(
       <>
       <h2>product listing page</h2>

       {
        this.state.loading=true ? (
<>
        <h2>plaease wait...</h2>
        <CustomSpinner/>
        </>
    ):(
        <div>
              { this.state.productListing.map((eachObject)=>{
                return <h2>{eachObject.title}</h2>           
            })}
            </div>
    )}
        
       
       </>

        );
    }
}
export default ProductListing;