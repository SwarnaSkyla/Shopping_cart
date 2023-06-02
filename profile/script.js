// Write your script here

const firstName=document.getElementById("firstName");
const lastName=document.getElementById("lastName");
const oldPassword=document.getElementById("oldPassword");
const newPassword=document.getElementById("newPassword");
const cnfPassword=document.getElementById("confirmPassword");
const saveBtn=document.getElementById("saveBtn");
const logoutBtn=document.getElementById("logoutBtn");
const presentLoginedUser=JSON.parse(localStorage.getItem("presentLoginedUser"));
let allUsersarray=JSON.parse(localStorage.getItem("user"))


firstName.value=presentLoginedUser.firstName
lastName.value=presentLoginedUser.lastName

saveBtn.addEventListener("click",saveFn)

function saveFn(event){

    event.preventDefault()

    if(oldPassword.value!==presentLoginedUser.password){
        alert("Please give correct password")
    }
    if(newPassword.value!=cnfPassword.value){
        alert("New password and confirm password do not match");
    }
    else if(newPassword.value===""){
        alert("Give new password")
    }

    else if(newPassword.value!=="" && newPassword.value===cnfPassword.value && oldPassword.value===presentLoginedUser.password){
        presentLoginedUser.firstName=firstName.value;
        presentLoginedUser.lastName=lastName.value;
    
        presentLoginedUser.password=newPassword.value;
   
        localStorage.setItem("presentLoginedUser",JSON.stringify(presentLoginedUser))


        allUsersarray.forEach((item)=>{
            if(presentLoginedUser.email==item.email){
                item.firstName=firstName.value
                item.lastName=lastName.value
                item.password=newPassword.value
            }
        });

        localStorage.setItem("user",JSON.stringify(allUsersarray))
   

        alert("Succesfully changed")
        oldPassword.value=""
        newPassword.value=""
        cnfPassword.value=""
   
    }
}


logoutBtn.addEventListener("click",(event)=>{
    event.preventDefault()
    localStorage.setItem("presentLoginedUser",JSON.stringify({}))

    window.location.href="../index.html";

    return ;
})