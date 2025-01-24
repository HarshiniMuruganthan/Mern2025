/*class ClassCompEG{
    a=10
}
const obj=new ClassCompEG();
console.log(obj.a)
*/

import React from "react";
import Content from "../FunctionaComponents/Content";
class ClassCompEG extends React.Component{
    render(){
    return(
        <div>
        <h3>class component example</h3>
        <Content/>
        </div>
    )
}
}
export default ClassCompEG;