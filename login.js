let loginId = document.getElementById("loginId");

let buttonId = document.getElementById("buttonId");
let anchorId = document.getElementById("anchorId");


let loginDetails={
    username:"admin",
    password:"user"
}

function clickHere(){
    let user = document.getElementById("userName").value;
    let pass = document.getElementById("passWord").value;
    let {username,password} = loginDetails
    if (user===username && pass===password){
        alert("login successful");
        window.location.assign("options.html");
    }
    else{
        alert("Invalid username/password");
    }
}
loginId.addEventListener("submit",function(event){
    event.preventDefault();
});


