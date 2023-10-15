import { useState } from "react";
import { CartLength } from "./Context";

export default function Main( {children}){
    const [searchData,setSearchData] = useState([{}])
  

    function PutData(data){
        setSearchData(data)
    }
    const obj = {
        PutData:PutData,
        searchData:searchData
    }
    return(
        <>
         <CartLength.Provider value={obj}>
         {children}
         </CartLength.Provider>
        </>
    )
}