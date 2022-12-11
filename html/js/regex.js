
const regex_un=/^[0-9,A-Z,a-z]{1,10}$/;	
function validateform() {
    var usernameElement = document.forms[0].elements[0];
    var un=usernameElement.value;
    var is_valid=regex_un.test(un);
    if(is_valid === false){
        usernameElement.classList.add("error");
        document.getElementById('message').innerHTML='Username is not valid';
    }
    else{
        usernameElement.classList.remove("error");
        document.getElementById('message').innerHTML='';
        
    }
    return false;
  
}
// const regex_em=/^[0-9,A-Z,a-z]{1,25}@[0-9,A-Z,a-z]{1,10}.[a-z]{2,3}$/;
const regex_em=/^[0-9A-Za-z]{1,25}@[0-9A-Za-z]{1,10}\.[a-z]{2,3}$/;
function validate_email() {
   var emailElement = document.forms[0].elements[1];
   var em =emailElement.value;
   var iss_valid = regex_em.test(em);
   if(iss_valid === false){
    //    emailElement.style.border='1px solid red';
        emailElement.classList.add("error");
        document.getElementById('message').innerHTML='Email is not valid';
   }
   else{
    //    emailElement.style.border='';
       emailElement.classList.remove("error");
       document.getElementById('message').innerHTML='';
       
   }
   return false;
 
}



