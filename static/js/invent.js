let InventiiJson
viewadd();
function add(){
    let NewInvent={
        "nr":InventiiJson.length+1,
        "id":document.getElementById("nume inventie").value,
        "nume_inventie":document.getElementById("nume inventie").value,
        "nume_inventator":document.getElementById("nume inventator").value,
        "invent":document.getElementById("invent").value,
        "img":document.getElementById("img").value,
        "descriere":document.getElementById("descriere").value
    }
    NewInvent.descriere = NewInvent.descriere.split('.');
    NewInvent = JSON.stringify(NewInvent);
    fetch("http://127.0.0.1:3000/invent.html/add",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"},
        body:NewInvent,
    })
    viewadd();
    
}

function viewadd(){
    fetch("http://127.0.0.1:3000/invent.html/view")
       .then((response)=>response.json())
       .then(function (inventii){
           InventiiJson = inventii;
           if(document.body.getElementsByClassName("butoane").length!= 0)
            document.body.removeChild(document.getElementById("butoane"));
           let x = document.getElementsByClassName("card-container");
           for(let i=0;i<x.length;++i){
            document.body.removeChild(x[i]);i--;
           } 
           let butoane = document.createElement("div");
           butoane.className = "butoane";
           butoane.id = "butoane";
           butoane.style.display = "flex";
           butoane.style.flexDirection = "row";
           butoane.style.textAlign = "center";
           butoane.style.justifyContent = "space-evenly";
           butoane.style.width = 100+"%";
           butoane.style.height = 7+"vh";
           document.body.appendChild(butoane);
           for(let i = 1;i <= inventii.length;++i){
            let btni = document.createElement("a");
            btni.href = "invent.html#"+ inventii[i-1].id;
            btni.innerText = i;
            btni.style.color =  "black";
            btni.style.backgroundColor = "grey";
            btni.style.width = 6+"vh";
            btni.style.height = 6+"vh";
            butoane.appendChild(btni);
           }
           for(let i = 0 ;i <inventii.length;++i){
            let div1 = document.createElement("div");
            div1.id=inventii[i].id; 
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
            p1.innerText = inventii[i].invent;
            div3.appendChild(p1);
        
            let p2 = document.createElement("p");
            p2.className = "card-p";
            p2.innerText = inventii[i].nume_inventator;
            div3.appendChild(p2);
        
            let span2 =  document.createElement("span");
            span2.className = "card-description subtle";
            for(let j=0;j<inventii[i].descriere.length;++j)
            span2.innerText += "\r\n"+inventii[i].descriere[j];
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
        "id":document.getElementById("nume inventie").value,
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
    if(invent.nume_inventie != ""){
    InventiiJson[poz].nume_inventie = invent.nume_inventie;
    InventiiJson[poz].id = invent.nume_inventie;
    }
    if(invent.nume_inventator != "")
    InventiiJson[poz].nume_inventator = invent.nume_inventator;
    if(invent.invent != "")
    InventiiJson[poz].invent = invent.invent;
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
