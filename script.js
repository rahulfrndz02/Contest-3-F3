const name= document.getElementById('name');
const email=document.getElementById('email')
const password= document.getElementById('password')
const confirmPassword= document.getElementById('cpassword');

document.getElementById('continue').addEventListener('click', (e)=>{
    e.preventDefault();
if(name.value.trim()===''||email.value.trim()===''||password.value.trim()===''||confirmPassword.value.trim()==='')
{
const errorMessage=document.getElementById('error-message');
errorMessage.innerText="Error: All fields are mandatory!";

}
else {
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerText = ""; // Clear the error message if all fields are filled
  
    // Perform other actions here if all fields are filled check if password and confirm password are not matched
          if(password.value.trim()!==confirmPassword.value.trim()) 
           {
              alert("Password Mismatched");
            }
            else{
                saveUser(name.value, email.value,password.value)
            }  

}
   

})
function saveUser(name, email, password)
{
    let userObj={
        name:name, 
        email:email,
        password:password,
        // token:token,
    }
    let users= JSON.parse(localStorage.getItem('users'))
    if(users===null)
    {
        users=[];
    }
    users.push(userObj);
    localStorage.setItem('users',JSON.stringify(users)); // updated it in localStorage

    sessionStorage.setItem('loggenInUser',JSON.stringify(userObj));
    name.value='';
   email.value='';
    password.value='';
    confirmPassword.value='';
    
    // alert('sign up successful');


    // this is how we handle multiple pages
    // this will redirect to profile folder
    window.location.href='./profile';
//     const message=document.getElementById('message');
// message.innerText="Signup Successful!";
}
