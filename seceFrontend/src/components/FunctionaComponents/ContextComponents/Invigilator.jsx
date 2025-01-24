import Faculty from "./Faculty"

const Invigilator=(res)=>{
    return(
        <div>
<h4>Invigilation in process</h4>
<Faculty sgpa={res.sgpa} cgpa={res.cgpa}/>
        </div>
    )
}
export default Invigilator