

function validateform(){  
  var name=document.myform.name.value; 
  var last_name=document.myform.last_name.value; 
    var email=document.myform.email.value;  
    var password=document.myform.password.value;  
      
    if (name==null || name==""){  
      alert("First Name can't be blank");  
      return false; 
       }
       
       else if (last_name==null || last_name==""){
        alert("Last Name can't be blank");  
      return false; 
       }
       else if (email==null || email==""){
        alert("Email can't be blank");  
      return false; 
       }
       
        else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
    }  

    function loginValidation(){

      var email1=document.form1.email1.value;
      var password1=document.form1.password1.value;

       if(email1==null|| email1==""){
        alert("email can't be blank");  
      return false;
       }
      else if(password1==null|| password1==""){
        alert("Password can't be blank");  
        return false;

      }
      else if(password1.length<8){
        alert("Password must be at least 8 characters");  
        return false;

      }
       

    }