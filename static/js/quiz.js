let ifizica = ["Albert Einstein - 1879", "Aurel Enache - 1968 ", "Isaac Newton - 1643", "Daniel Gabriel Fahrenheit - 1686", "Nikolaus Otto - 1832"]
let ichimie = ["Petre Bogdan - 1873 ", "Lazar Edeleanu - 1861", "Sir Humphry Davy - 1778", "Alfred Nobel - 1833"]
let imedicina = ["Victor Babeș - 1854", "Wilhelm Conrad Rontgen - 1845", "Rene Laennec - 1781", "Alfred Nobel - 1833"]
let iaviatie = ["Justin Capră - 1933", "Aurel Vlaicu - 1882", "Traian Vuia - 1872", "Frații Wright - 1871"]
let inavigatie = ["William Thompson - 1824", "David Bushnell - 1740", "Claude de Jouffroy - 1751", "Josef Resselt - 1793"]


function alege(){
    const opt = document.getElementById("domains-select");
    let arr = [fizica,chimie,medicina,aviatie,navigatie,all];
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
function cmp(a, b)
{
    var ka = parseInt(a.split("-")[1]),
    kb = parseInt(b.split("-")[1]);

    // simple key comparison
    if (ka > kb) {
        return 1;
    } else if (ka < kb) {
        return -1;
    }
    return 0;
}
function sortyear(){
    const rez = document.getElementById("rezultat").innerText;
   
    if(rez != null){ 
        let arr = rez.split("\n");
        for(let i=0;i<arr.length;++i)
            if(arr[i] == ' ' || arr[i] == ''){
                arr.splice(i,1);
                i--;
            }
        arr.sort(cmp);
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
    text.style.height = 40+"vh";
    if(deja)
        text.removeChild(deja);


    let div1=document.createElement("div");
    div1.id = "rezultat";
    div1.style.backgroundColor="lightblue";
    div1.style.border="1px solid black";
    div1.style.width="90%";
    div1.style.marginTop = "4px";
    div1.style.alignSelf = "center";
    div1.style.textAlign = "center";
    text.append(div1);
    for(let i =0;i<ifizica.length;++i){
        let p1 = document.createElement("p");
        p1.innerText = ifizica[i];
        p1.style.fontSize = "20px";
        div1.append(p1);
    }

}
function chimie(){
    const text = document.getElementsByClassName("info")[0];
    const deja = document.getElementById("rezultat");
    text.style.height = 40+"vh";
    if(deja)
        text.removeChild(deja);


    let div1=document.createElement("div");
    div1.id = "rezultat";
    div1.style.backgroundColor="lightblue";
    div1.style.border="1px solid black";
    div1.style.width="90%";
    div1.style.marginTop = "4px";
    div1.style.alignSelf = "center";
    div1.style.textAlign = "center";
    text.append(div1);
    for(let i =0;i<ichimie.length;++i){
        let p1 = document.createElement("p");
        p1.innerText = ichimie[i];
        p1.style.fontSize = "20px";
        div1.append(p1);
    }  
}
function medicina(){
    const text = document.getElementsByClassName("info")[0];
    const deja = document.getElementById("rezultat");
    text.style.height = 40+"vh";
    if(deja)
        text.removeChild(deja);


    let div1=document.createElement("div");
    div1.id = "rezultat";
    div1.style.backgroundColor="lightblue";
    div1.style.border="1px solid black";
    div1.style.width="90%";

    div1.style.marginTop = "4px";
    div1.style.alignSelf = "center";
    div1.style.textAlign = "center";
    text.append(div1);
    for(let i =0;i<imedicina.length;++i){
        let p1 = document.createElement("p");
        p1.innerText = imedicina[i];
        p1.style.fontSize = "20px";
        div1.append(p1);
    }
}
function aviatie(){
    const text = document.getElementsByClassName("info")[0];
    const deja = document.getElementById("rezultat");
    text.style.height = 40+"vh";
    if(deja)
        text.removeChild(deja);

    let div1=document.createElement("div");
    div1.id = "rezultat";
    div1.style.backgroundColor="lightblue";
    div1.style.border="1px solid black";
    div1.style.width="90%";

    div1.style.marginTop = "4px";
    div1.style.alignSelf = "center";
    div1.style.textAlign = "center";
    text.append(div1);
    for(let i =0;i<iaviatie.length;++i){
        let p1 = document.createElement("p");
        p1.innerText = iaviatie[i];
        p1.style.fontSize = "20px";
        div1.append(p1);
    }
}
function navigatie(){
    const text = document.getElementsByClassName("info")[0];
    const deja = document.getElementById("rezultat");
    text.style.height = 40+"vh";
    if(deja)
        text.removeChild(deja);


    let div1=document.createElement("div");
    div1.id = "rezultat";
    div1.style.backgroundColor="lightblue";
    div1.style.border="1px solid black";
    div1.style.width="90%";

    div1.style.marginTop = "4px";
    div1.style.alignSelf = "center";
    div1.style.textAlign = "center";
    text.append(div1);
    for(let i = 0;i<inavigatie.length;++i){
        let p1 = document.createElement("p");
        p1.innerText = inavigatie[i];
        p1.style.fontSize = "20px";
        div1.append(p1);
    }
}
function all(){
    let alldomains = ifizica.concat(ichimie,inavigatie,imedicina,iaviatie);

    const text = document.getElementsByClassName("info")[0];
    const deja = document.getElementById("rezultat");
    text.style.height = 100+"vh";
    if(deja)
        text.removeChild(deja);

    let div1=document.createElement("div");
    div1.id = "rezultat";
    div1.style.backgroundColor="lightblue";
    div1.style.border="1px solid black";
    div1.style.width="90%";

    div1.style.marginTop = "4px";
    div1.style.alignSelf = "center";
    div1.style.textAlign = "center";
    text.append(div1);
    for(let i = 0;i<alldomains.length;++i){
        let p1 = document.createElement("p");
        p1.innerText = alldomains[i];
        p1.style.fontSize = "20px";
        div1.append(p1);
    }
}