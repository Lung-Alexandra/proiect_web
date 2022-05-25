const express = require('express');
const req = require('express/lib/request');
const hostname = '127.0.0.1';
const port = 3000;
const app = express();
const path = require("path");

app.set('view engine', 'ejs');
app.use(express.json())
app.use("/static",express.static("./static"));
const StaticPath = path.join(__dirname,'views/html');
//app.use(express.static(StaticPath));

app.get("/",(require,response)=>{
  response.render(StaticPath);
});
app.get("/home",(require,response)=>{
  response.render(path.join(StaticPath,'home'));
});
app.get("/index",(require,response)=>{
  response.render(path.join(StaticPath,'index'));
});
app.get("/generalitati",(require,response)=>{
  response.render(path.join(StaticPath,'generalitati'));
});
app.get("/quiz",(require,response)=>{
  response.render(path.join(StaticPath,'quiz'));
});
app.get("/inventatori-si-savanti",(require,response)=>{
  response.render(path.join(StaticPath,'inventatori-si-savanti'));
});
app.get("/inventii",(require,response)=>{
  response.render(path.join(StaticPath,'inventii'));
});

app.get("/register-login.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'register-login.html'));
});

app.get("/bell.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'bell.html'));
});
app.get("/davinci.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'davinci.html'));
});
app.get("/edison.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'edison.html'));
});
app.get("/tesla.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'tesla.html'));
});
app.get("/vlaicu.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'vlaicu.html'));
});
app.get("/watt.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'watt.html'));
});
app.get("/alan.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'alan.html'));
});
app.get("/albert.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'albert.html'));
});
app.get("/quiz1.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'quiz1.html'));
});
app.get("/quiz2.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'quiz2.html'));
});
app.get("/quiz3.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'quiz3.html'));
});
app.get("/quiz4.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'quiz4.html'));
});
app.get("/quiz5.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'quiz5.html'));
});


let inventii=[{
  "nr":1,
  "nume_inventie":"Becul",
  "nume_inventator":"Inventator real: Sir Humphry Davy",
  "invent":"Inventator „oficial”: Thomas Edison",
  "img":"/static/img/inventii/becul.jpg",
  "descriere" : ["In anul 1802,Sir Humphry Davy era in posesia celei mai puternice baterii electrice din acea perioada, obiect detinut cu mandrie la Institutul Regal al Marii Britanii. In acelasi an, a fost produsa prima forma de lumina incandescenta prin transmiterea unui flux de curent electric prin intermediul unui fir subtire de platina, metal ales datorita rezistentei sale deosebite la topire.","Noua forma de iluminare nu era indeajuns de puternica sau rezistenta pentru a fi folosita in aplicatii practice, dar a fost primul obiect care emitea lumina prin intermediul curentului electric. De abia in anul 1879, Thomas Edison a creat becul comercial."]
  }]
app.get("/invent.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'invent.html'));
});
app.post("/invent.html/add",(require,response)=>{
  let newInvent = {
    "nr":inventii.length+1,
    "nume_inventie":require.body.nume_inventie,
    "nume_inventator":require.body.nume_inventator,
    "invent":require.body.invent,
    "img":require.body.img,
    "descriere":require.body.descriere,
  };
  inventii.push(newInvent);
  response.send(inventii);
});
app.get("/invent.html/view",(require,response)=>{
  response.send(JSON.stringify(inventii));
});
app.delete("/invent.html/delete_invent/:id", (req,res)=>{
  let f = parseInt(req.params.id)-1;
  
  if(f>=0 && f<inventii.length){
    inventii.splice(f,1);
    for(let i=0;i<inventii.length;++i)
    inventii[i].nr = i+1;
    res.send(inventii);

  }else{
    res.send({msg:`ID invalid.`})
  }

})
app.put("/invent.html/update_invent/:id", (req,res)=>{
  let f = parseInt(req.params.id)-1;

  if(f>=0 && f<inventii.length){
    if(req.body.nume_inventie != "")
    inventii[f].nume = req.body.nume_inventie;
    if(req.body.nume_inventator != "")
    inventii[f].invent = req.body.nume_inventator;
    if(req.body.invent != "")
    inventii[f].nume_inventator = req.body.invent;
    if(req.body.img != "")
    inventii[f].img = req.body.img;
    if(req.body.descriere != "")
    inventii[f].descriere = req.body.descriere;

    res.send(inventii);

  }else{
    res.send({msg:"Invalid ID"})
  }

})
app.get("*",(require,response)=>{
  response.sendFile(path.join(StaticPath,'404error.html'))
})
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});