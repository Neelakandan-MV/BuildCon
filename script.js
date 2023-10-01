var emailField=document.getElementById("email-field");
var emailError=document.getElementById("email-error");


function validateEmail(){
    
    emailField.style.borderBottomColor= "red";
    
    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML= "Please enter a valid email address";
    
    
        return false;
    }else{
    
    emailError.innerHTML= "";
    emailField.style.borderBottomColor= "green";
    return true;
    }
}
