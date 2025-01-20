import {useState} from 'react';
const Contact=()=>{
    //var array=[10,20];
    var [num,setNum]=useState(0);
    function handleAdd(){
        return setNum(num+1)
    }
    return(
       <div>
       
           <h2>Welcome to contact page </h2>
           <h3>This is a state example</h3>
           <h4>Number is {num}</h4>
           <button onClick={handleAdd}>+</button>
       </div>
    );
   }
   export default Contact;