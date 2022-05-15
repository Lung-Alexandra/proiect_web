var rootProp = document.documentElement.style;
let ok = false;
window.onload = function() {
    const btn1 = document.querySelector(".register-btn");
    btn1.addEventListener('click', function () {
        document.querySelector(".register-form").classList.remove('form-hidden');
        document.querySelector(".login-form").classList.add('form-hidden');
        document.getElementsByClassName("box")[0].classList.add('slide-form');
    });
    const btn2 = document.querySelector(".login-btn");
    btn2.addEventListener('click', function () {
        document.querySelector(".register-form").classList.add('form-hidden');
        document.querySelector(".login-form").classList.remove('form-hidden');
        document.getElementsByClassName("box")[0].classList.remove('slide-form');
    });
}    
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
    if(ok){
        lightMode();
        ok=false;
    }
    else {
        darkMode();
        ok=true;
    }
}
