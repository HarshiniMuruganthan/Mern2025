import { useState,useRef,useEffect}from 'react';

const UseRef= () => {
  var[text,setText]=useState("");
 var prevRender=useRef();
  useEffect(()=>{
prevRender.current=text
  },[text])
 return (
    <div >
      <h2> This is useRef Hook Example</h2>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
      <h4>The text is {text}</h4>
      <h5>The previous render text is{prevRender.current}</h5>
      
    </div>
  )
}

export default UseRef;
