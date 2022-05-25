
window.sessionStorage.clear();

let InventiiJson=[
    {
    "nr":1,
    "nume_inventie":"Becul",
    "nume_inventator":"Inventator real: Sir Humphry Davy",
    "invent":"Inventator „oficial”: Thomas Edison",
    "img":"/static/img/inventii/becul.jpg",
    "descriere" : ["In anul 1802,Sir Humphry Davy era in posesia celei mai puternice baterii electrice din acea perioada, obiect detinut cu mandrie la Institutul Regal al Marii Britanii. In acelasi an, a fost produsa prima forma de lumina incandescenta prin transmiterea unui flux de curent electric prin intermediul unui fir subtire de platina, metal ales datorita rezistentei sale deosebite la topire.","Noua forma de iluminare nu era indeajuns de puternica sau rezistenta pentru a fi folosita in aplicatii practice, dar a fost primul obiect care emitea lumina prin intermediul curentului electric. De abia in anul 1879, Thomas Edison a creat becul comercial."]
    }

]
viewadd();
function add(){
    let invent={
        "nr":InventiiJson.length+1,
        "nume_inventie":document.getElementById("nume inventie").value,
        "nume_inventator":document.getElementById("nume inventator").value,
        "invent":document.getElementById("invent").value,
        "img":document.getElementById("img").value,
        "descriere":document.getElementById("descriere").value
    }
    InventiiJson.push(invent);
    invent = JSON.stringify(invent);
    fetch("http://127.0.0.1:3000/invent.html/add",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"},
        body:invent,
    })
    viewadd();
    
}

function viewadd(){
    fetch("http://127.0.0.1:3000/invent.html/view")
       .then((response)=>response.json())
       .then(function (inventii){
            let x = document.getElementsByClassName("card-container");
            for(let i=0;i<x.length;++i){
            document.body.removeChild(x[i]);i--;}
           for(let i = 0 ;i <inventii.length;++i){
            let div1 = document.createElement("div");
            div1.id=inventii[i].nume_inventie; 
            div1.className="card-container" 
            document.body.appendChild(div1);
            console.log(div1);
        
            let div2 = document.createElement("div");
            div2.className = "card u-clearfix"
            let img = document.createElement("img");
            img.src= inventii[i].img;
            img.className="card-media"
            div1.appendChild(div2)
        
            let div3 = document.createElement("div");
            div3.className="card-body"
            div2.appendChild(div3)
            div2.appendChild(img)
        
            let span1 =  document.createElement("span");
            span1.className = "card-number card-circle subtle";
            span1.innerText = inventii[i].nr;
            div3.appendChild(span1);
        
            let h2 = document.createElement("h2");
            h2.className = "card-title";
            h2.innerText = inventii[i].nume_inventie;
            div3.appendChild(h2);
        
            let p1 = document.createElement("p");
            p1.className = "card-p";
            p1.innerText = inventii[i].nume_inventator;
            div3.appendChild(p1);
        
            let p2 = document.createElement("p");
            p2.className = "card-p";
            p2.innerText = inventii[i].invent;
            div3.appendChild(p2);
        
            let span2 =  document.createElement("span");
            span2.className = "card-description subtle";
            span2.innerText += "\r\n"+inventii[i].descriere;
            div3.appendChild(span2);
            
           }
       })
     
}
function delet(){
   
    let id=document.getElementById("idinvent").value;
    let poz = 0;
    for(let i=0;i<InventiiJson.length;++i)
    if(InventiiJson[i].nr == id){
        poz = i;
        break;
    }
    let x = document.getElementsByClassName("card-container");
    for(let i= poz;i<x.length;++i)
        x[i].remove();
    InventiiJson.splice(poz,1);
    fetch("http://127.0.0.1:3000/invent.html/delete_invent/"+ id,{
    method:"DELETE",
    })
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))
    viewadd();

}
function update(){
    let id=document.getElementById("idinvent").value;
    let invent={
        "nr":id,
        "nume_inventie":document.getElementById("nume inventie").value,
        "nume_inventator":document.getElementById("nume inventator").value,
        "invent":document.getElementById("invent").value,
        "img":document.getElementById("img").value,
        "descriere":document.getElementById("descriere").value
    }
    let poz = 0;
    for(let i=0;i<InventiiJson.length;++i)
    if(InventiiJson[i].nr == id){
        poz = i;
        break;
    }
    if(invent.nume_inventie != "")
    InventiiJson[poz].nume = invent.nume_inventie;
    if(invent.nume_inventator != "")
    InventiiJson[poz].invent = invent.nume_inventator;
    if(invent.invent != "")
    InventiiJson[poz].nume_inventator = invent.invent;
    if(invent.img != "")
    InventiiJson[poz].img = invent.img;
    if(invent.descriere != "")
    InventiiJson[poz].descriere = invent.descriere;

    invent = JSON.stringify(invent)
    fetch("http://127.0.0.1:3000/invent.html/update_invent/"+ id,{
    method:"PUT", headers:{
    "Content-Type":"application/json"},
    body:invent,})
    .then(response => response.json())
    .then(result => {viewadd();})
    

}
