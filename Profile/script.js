const name = document.getElementById("names");
const token = document.getElementById('tokens');
const email = document.getElementById('emails');
const password=document.getElementById("passwords");
let currentUser = JSON.parse(sessionStorage.getItem('loggenInUser'));

name.innerText = currentUser.name;
email.innerText = currentUser.email;

password.innerText=currentUser.password;


//logout functioanlity
const logoutBtn= document.getElementById('logoutBtn')
logoutBtn.addEventListener('click', (handleLogout));
function handleLogout(){
    localStorage.clear();
    window.location.href="../index.html";
}

// generate random token
 function generateRandomToken(length){
const characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let token = '';
for(let i=0; i<length; i++)
{
    token+= characters.charAt(Math.floor(Math.random()*characters.length))
}
return token;
}
const randomToken = generateRandomToken(10); // Generates a random token with a length of 10 characters
 token.innerText = randomToken;