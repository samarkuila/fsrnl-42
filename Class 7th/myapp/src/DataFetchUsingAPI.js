import React, { useState, useEffect } from "react";
import axios from "axios";


function DataFetchUsingAPI() {
    const [product, setProduct] = useState([]);
    const [loader, setLoader] =useState(true);


    useEffect(() => {
        console.log("Inside useEffect");
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProduct(json);
                setLoader(false);
                console.log(json);
            })
    }, []);

return(
   <>
   {loader ?("loading"):(
   
   <>
    
     <p>{product[0].title}</p>
      <img height="500px" width="500px" src={product[0].image} /> 
        
    </>)}
    
    </>
);
}

export default DataFetchUsingAPI;