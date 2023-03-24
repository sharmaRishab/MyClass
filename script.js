

function validateform(){  
  var name=document.myform.name.value; 
  var last_name=document.myform.last_name.value; 
    var email=document.myform.email.value;  
    var password=document.myform.password.value;  
      
    if (name==null || name==""){  
      alert("name can't be blank");  
      return false; 
       }
       
       else if (last_name==null || last_name==""){
        alert("last name can't be blank");  
      return false; 
       }
       else if (email==null || email==""){
        alert("email can't be blank");  
      return false; 
       }
       
        else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
    }  