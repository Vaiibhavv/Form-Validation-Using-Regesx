//console.log("js is imported");

let user= document.getElementById("username");
let phone= document.getElementById('number');
let gmail= document.getElementById('emailad');
let uservalid = false;


user.addEventListener('blur' , (()=>{

    let reg= /^([a-zA-Z]+)([0-9]){0,2}$/;
    let str= user.value;
    console.log(reg, str);
    
    if(reg.test(str))
    {
        console.log("User name is validated");
        uservalid=true;
       user.classList.remove("is-invalid");
    }
    else{
        console.log("User name is  not validated");
       user.classList.add("is-invalid");
    }
}))
gmail.addEventListener('blur' , (()=>{

    let reg= /^([_\.a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]){0,4}$/;
    let str= gmail.value;
    console.log(reg, str);

    if(reg.test(str))
    {
        console.log("Email is validated");
        gmailvalid=true;
        gmail.classList.remove("is-invalid");
    }
    else{
        console.log("Email is  not validated");
        gmail.classList.add("is-invalid");
    }
}))
phone.addEventListener('blur' , (()=>{

    let reg= /^([0-9]){10}$/;
    let str= phone.value;
    console.log(reg, str);

    if(reg.test(str))
    {
        console.log("Phone number is validated");
        phonevalid=true;
        phone.classList.remove("is-invalid");
    }
    else{
        console.log("Phone number is  not validated");
        phone.classList.add("is-invalid");
    }
    
}))



