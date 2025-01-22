import {useEffect,useState} from "react";
const UseEffect=()=>{
    var[text,setText]=useState("");
    useEffect(()=>{
        console.log(text);

    },[])

    return(
        <div>
            <h1>This is useEffect Example</h1>

            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <input type="text" value={text} onChange={()=>setText()}/>

            <h4>the text is {text}</h4>
        </div>
    )

}
export default UseEffect;