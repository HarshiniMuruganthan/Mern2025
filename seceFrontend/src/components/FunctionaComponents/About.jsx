import {useState} from "react";
const About=()=>{
    var [text,setText]=useState("SECE");
    function handleText(event){
        setText(event.target.value)
    }
 return(
    <div>
        <h2>This is about comp </h2>
        <h4>Text Area:</h4>
        {/*<textarea value={text} onChange={(event)=>setText(event.target.value)}/>*/}
            <textarea value={text} onChange={handleText}/>
        <p>The text is {text}</p>
    </div>
 )
}
export default About;