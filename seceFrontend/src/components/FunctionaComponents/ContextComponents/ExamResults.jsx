import {useContext} from "react";
import  {ThemeProvider} from "../Hooks/UseContext";
const ExamResults = () => {
    const res=useContext(ThemeProvider)
  return (
    <div>
        
      <h2>Results are published and your SGPA is {res.sgpa} and CGPA is {res.cgpa}</h2>
    </div>
  )
}


export default ExamResults;
