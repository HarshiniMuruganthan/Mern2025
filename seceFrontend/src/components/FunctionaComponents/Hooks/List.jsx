import { useEffect, useState } from "react"

const ListItems=({func})=>
{
    var [numbers,setNumbers]=useState([])
    useEffect(()=>{setNumbers(func())
    console.log(numbers)
    },[func])
    return(
        <div>
            <h3>The num list is as follows according to the number present in input box</h3>
            {numbers.map((number,index)=>(<h4 key={index}>{number}</h4>))}
        </div>
    )
}

export default ListItems