console.log("js connected");


document.getElementById("login-btn").addEventListener("click",function(){
    console.log("clicked login button");

    // 1.get login user name 
    const loginUsername=document.getElementById("login-username");
    const username=loginUsername.value;
    console.log(username);


    // 2.get login password

    const loginPassword=document.getElementById("login-password");
    const password=loginPassword.value;
    console.log(password);


    // 3.checked username and password

    if(username=="admin"&&password=="admin123"){
        alert("login successfully");
        window.location.assign("/home.html");
    }


    else{

        alert("login failed");
        document.getElementById('login-username').value="";
        document.getElementById('login-password').value="";
        return;
    }

})
