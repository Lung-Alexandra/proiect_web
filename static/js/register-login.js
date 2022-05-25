var rootProp = document.documentElement.style;
let ok = window.localStorage.getItem("mod")||null
let okd = 0;
if(ok!=null)
    Mode()
const btn1 = document.querySelector(".register-btn");
btn1.addEventListener('click', function () {
    document.querySelector(".register-form").classList.remove('form-hidden');
    document.querySelector(".login-form").classList.add('form-hidden');
    document.getElementsByClassName("box")[0].classList.add('slide-form');
    if(ok == null){
        darkMode();
        okd = 1;
    }
});
const btn2 = document.querySelector(".login-btn");
btn2.addEventListener('click', function () {
    document.querySelector(".register-form").classList.add('form-hidden');
    document.querySelector(".login-form").classList.remove('form-hidden');
    document.getElementsByClassName("box")[0].classList.remove('slide-form');
    if(ok == null){
        lightMode();
        okd = 0; 
    }
});


function lightMode(){
    rootProp.setProperty("--backgroundColor", "rgb(201, 197, 197)");
    rootProp.setProperty("--formBackgroundColor", "rgb(224, 219, 219)"); 
    rootProp.setProperty("--shadow1", "rgba(119,119,119,0.85)");
    rootProp.setProperty("--shadow2", "rgba(255,255,255,0.85)");
    rootProp.setProperty("--shadow3", "rgba(255,255,255)");
    rootProp.setProperty("--h3Color", "#00354d");
    rootProp.setProperty("--labelColor", "balck");
}
function darkMode(){
    rootProp.setProperty("--backgroundColor", "rgb(9 25 23)");
    rootProp.setProperty("--formBackgroundColor", "rgba(9 25 23)"); 
    rootProp.setProperty("--shadow1", "rgba(0 0 0 / 45%)");
    rootProp.setProperty("--shadow2", "rgba(255 255 255 / 15%)");
    rootProp.setProperty("--shadow3", "rgba(255 255 255 / 15%)");
    rootProp.setProperty("--h3Color", "white");
    rootProp.setProperty("--labelColor","white");
}


function Mode(){
    if (okd == 0 && ok == null)
        ok = 'dark'
    if(okd == 1 && ok == null)
        ok='light'
    if(ok == 'light'){
        lightMode();
        ok='dark';
        okd= 0;
    }
    else if(ok=='dark'){
        darkMode();
        ok='light';
        okd = 1;
    }
}
function clearmode(){
    window.localStorage.clear();
    ok = null
    okd=0;

}
function setmode(){
    if(okd == 0)
        window.localStorage.setItem("mod","light")
    else 
        window.localStorage.setItem("mod","dark")
    ok = window.localStorage.getItem("mod");
    Mode();
}

function validare(){

    let h3  = document.getElementById("login-form")||undefined;
    if(h3!=undefined){
        // regex for email address validation
        let email=document.getElementsByName("emailAddress")[0].value;
        let validation_email=0;

        if(email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
            validation_email=1;
        }else{
            alert("invalid mail address");
        }


        // regex for password validation


        let password=document.getElementsByName("password")[0].value;
        let validation_password=0;

        if(password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$/)){
            validation_password=1;
        }else{
            alert("Parola gresita");
        }

        // validation for terms&conditions

        let x=document.getElementById("Remember").checked;
        if(x==true && validation_password == 1 && validation_email == 1){
            alert("vei fi conectat 5 zile.")
        }

        
    }
}

function validare1(){

    // regex for user name validation

    let username=document.getElementById("fullname").value;
    let validation_username=0;

    if(username.match(/^[a-zA-Z0-9_-]{3,20}$/)){
        validation_username=1;
    }else{
        alert("invalid username");
    }

    let email=document.getElementsByName("emailAddress")[1].value;
    let validation_email=0;

    if(email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        validation_email=1;
    }else{
        alert("invalid mail address");
    }


    // regex for password validation


    let password=document.getElementsByName("password")[1].value;
    let validation_password=0;

    if(password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$/)){
        validation_password=1;
    }else{
        alert("Weak password. The password must contain at least 8 charcaters including letters, digits and other key-symbols.");
    }
   
    // validation sexc choise
    let x=document.getElementById("masc").checked;
    let y=document.getElementById("fem").checked;
    if(x==false && y == false){
        alert("Choose a sex gendre.")
    }
}
