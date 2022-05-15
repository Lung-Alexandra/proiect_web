const express = require('express');
const hostname = '127.0.0.1';
const port = 3000;
const app = express();
const path = require("path");

app.set('view engine', 'ejs');

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
app.get("*",(require,response)=>{
  response.sendFile(path.join(StaticPath,'404error.html'))
})
//app.use(function(req, res,next){
 //res.status(404).sendFile( path.join(StaticPath,'404error.html'));
//});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});