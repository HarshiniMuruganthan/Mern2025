 //callback

 /*function submitForm(submit,db)
 {
    var [dbName,comment]=db()
    console.log("DB name is",dbName);
    //isValid(); 
    console.log(submit);
 }
 function database(){
    dbNAme="SECE"
    return[dbNAme,"Data stored successfully"]
 }
 submitForm("Form submitted successfully",database)
*/

 function submitForm(submit,isformValid){
    if(isformValid){
        console.log("Fields validation successfully");
        console.log(submit);
    }
    else{
        console.log("Form Validation failed");
        console.log("Form Submission Unsuccessful");
    }
 }
 function formValidation( )
 {
    email="sece@sece.ac.in"
    password="12345"
    if(email==="sece@sece.ac.in"&&password){
        return true
    }
    
    else{
        return false
        
    }
 }

submitForm("Form submitted successfully",formValidation)