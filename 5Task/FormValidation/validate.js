function validateData(){
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    //alert(email,password)
    if(email =="" || email == null){
        //update span tab
        document.getElementById('emailmsg').innerHTML="Please Enter Email Id"
    }
    
    if(password=="" || password==null){
        document.getElementById('pwdmsg').innerHTML ="Pls enter Password"
    }
    if(password.length<5){
        document.getElementById('pwdmsg').innerHTML="Pls Enter Min 5 Char";
    }
    return false
}