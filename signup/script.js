
document.querySelector("form").addEventListener("submit", register);


//let store user data n ocal storage


let user = JSON.parse(localStorage.getItem("user")) || [];




function register(event) {
    event.preventDefault();

    let firstName=document.getElementById("firstName").value;
    let lastName=document.getElementById("lastName").value;

    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    let cnfPassword=document.getElementById("confirm-password").value;





    if(firstName ==="" || lastName==="" || email ==="" || password ==="" || cnfPassword!==password){
        alert("Invalid Details?");
    }
    else{
        if(!checkEmail(email)){
            alert("Invalid email");
        }
        else{
            for(let i=0;i<user.length;i++){
                if(user[i].email ===email){
                    alert("Email already in use");
                    return ;
                }
            }

            let details={

                id:user.length,
                firstName:document.getElementById("firstName").value,
                lastName:document.getElementById("lastName").value,
                email:document.getElementById("email").value,
                password:document.getElementById("password").value,
                confirmPassword:document.getElementById("confirm-password").value,

            };
            user.push(details);

            localStorage.setItem("user",JSON.stringify(user));

            console.log(user);

            alert("Signup successfull");
        }
    }
}


function checkEmail(email){
    const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // console.log(regex);
    return regex.test(email);
}