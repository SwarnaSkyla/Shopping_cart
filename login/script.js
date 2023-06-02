const email=document.getElementById("email");
const password=document.getElementById("password");
const loginBtn=document.getElementById("login-btn");


loginBtn.addEventListener("click",registeredUsers);


function registeredUsers(event){
    event.preventDefault();

    const valid=JSON.parse(localStorage.getItem("user"));

    if(!valid){
        alert("Signup if not registerd");
        return;
    }


    for(let i=0;i<valid.length;i++){
       if(valid[i].email ===email.value && valid[i].password===password.value){
           let presentLoginedUser=valid[i];

           localStorage.setItem("presentLoginedUser",JSON.stringify(presentLoginedUser));
           window.location.href="../shop/index.html";
           return ;
       }
    }
    alert("Credentials did not match");
}