function alege(){
    const opt = document.getElementById("domains-select");
    let arr = [fizica,chimie,medicina,aviatie,navigatie];
    if(opt.value != ""){
        for(var i = 0;i<arr.length;++i)
            if(opt.value == arr[i].name){
                arr[i](); 
            }
        }
    else alert("alege un domeniu!");
}
function sort(){
    const rez = document.getElementById("rezultat").innerText;
   
    if(rez != null){ 
        let arr = rez.split("\n");
        for(let i=0;i<arr.length;++i)
            if(arr[i] == ' ' || arr[i] == ''){
                arr.splice(i,1);
                i--;
            }
        arr.sort();
        let text = '';
        for(let i=0;i<arr.length;++i)
            text = text.concat(arr[i]+'\n');
        document.getElementById("rezultat").innerText = text;
        document.getElementById("rezultat").style.fontSize = "20px"
    }
    else alert("Cauta rezultatele pt un domeniu!");
}
function fizica(){
    const text = document.getElementsByClassName("info")[0];
    const deja = document.getElementById("rezultat");
    if(deja)
        text.removeChild(deja);

    let a =["c a d","aaa sss","b gggg"];
    let div1=document.createElement("div");
    div1.id = "rezultat";
    div1.style.backgroundColor="lightblue";
    div1.style.border="1px solid black";
    div1.style.width="90%";
    div1.style.marginTop = "4px";
    div1.style.alignSelf = "center";
    div1.style.textAlign = "center";
    text.append(div1);
    for(let i =0;i<a.length;++i){
        let p1 = document.createElement("p");
        p1.innerText = a[i];
        p1.style.fontSize = "20px";
        div1.append(p1);
    }

}
function chimie(){
    const text = document.getElementsByClassName("info")[0];
    const deja = document.getElementById("rezultat");
    if(deja)
        text.removeChild(deja);

    let a =["a","b"];
    let div1=document.createElement("div");
    div1.id = "rezultat";
    div1.style.backgroundColor="lightblue";
    div1.style.border="1px solid black";
    div1.style.width="90%";
    div1.style.marginTop = "4px";
    div1.style.alignSelf = "center";
    div1.style.textAlign = "center";
    text.append(div1);
    for(let i =0;i<a.length;++i){
        let p1 = document.createElement("p");
        p1.innerText = a[i];
        p1.style.fontSize = "20px";
        div1.append(p1);
    }  
}
function medicina(){
    const text = document.getElementsByClassName("info")[0];
    const deja = document.getElementById("rezultat");
    if(deja)
        text.removeChild(deja);

    let a =["a","b"];
    let div1=document.createElement("div");
    div1.id = "rezultat";
    div1.style.backgroundColor="lightblue";
    div1.style.border="1px solid black";
    div1.style.width="90%";

    div1.style.marginTop = "4px";
    div1.style.alignSelf = "center";
    div1.style.textAlign = "center";
    text.append(div1);
    for(let i =0;i<a.length;++i){
        let p1 = document.createElement("p");
        p1.innerText = a[i];
        p1.style.fontSize = "20px";
        div1.append(p1);
    }
}
function aviatie(){
    const text = document.getElementsByClassName("info")[0];
    const deja = document.getElementById("rezultat");
    if(deja)
        text.removeChild(deja);
    let a =["a","b"];
    let div1=document.createElement("div");
    div1.id = "rezultat";
    div1.style.backgroundColor="lightblue";
    div1.style.border="1px solid black";
    div1.style.width="90%";

    div1.style.marginTop = "4px";
    div1.style.alignSelf = "center";
    div1.style.textAlign = "center";
    text.append(div1);
    for(let i =0;i<a.length;++i){
        let p1 = document.createElement("p");
        p1.innerText = a[i];
        p1.style.fontSize = "20px";
        div1.append(p1);
    }
}
function navigatie(){
    const text = document.getElementsByClassName("info")[0];
    const deja = document.getElementById("rezultat");
    if(deja)
        text.removeChild(deja);

    let a =["a","b"];
    let div1=document.createElement("div");
    div1.id = "rezultat";
    div1.style.backgroundColor="lightblue";
    div1.style.border="1px solid black";
    div1.style.width="90%";

    div1.style.marginTop = "4px";
    div1.style.alignSelf = "center";
    div1.style.textAlign = "center";
    text.append(div1);
    for(let i = 0;i<a.length;++i){
        let p1 = document.createElement("p");
        p1.innerText = a[i];
        p1.style.fontSize = "20px";
        div1.append(p1);
    }
}