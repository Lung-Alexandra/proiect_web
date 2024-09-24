let denumiri =["Nikolaus Otto","Sir Humphry","Albert Einstein","Alfred Nobel","Frații Wright","D.G. Fahrenheit","Traian Vuia","W. Thompson ","Issac Newton"];
let answer = [8,5,1,7,0,3,4,6,2];
const container=document.getElementsByTagName("container")[0];
for(let i=0;i<denumiri.length;i++){
    let div1=document.createElement("div");
    div1.innerText = denumiri[i]+"("+i+")";
    div1.style.backgroundColor="lightblue";
    div1.style.border="1px solid black";
    div1.style.width="20vh";
    div1.style.height="20vh";
    div1.style.lineHeight = "9";
    div1.style.textAlign = "center";
    div1.style.marginLeft="2px";
    container.append(div1)
}

let di=container.getElementsByTagName("div");
onkeydown=function(event){
    let a = Number(event.key);
   
     if(a === answer[0]){
        container.removeChild(di[answer[0]]);
        denumiri.splice(answer[0],1);
        answer.shift();   
        di=container.getElementsByTagName("div");
    }
    for(let i=0;i<answer.length;i++){
        if(answer[i] > a)
            answer[i] -= 1;
    }
    let h = a;
    for(let i=a;i<answer.length;i++){ 
         di[i].innerText = denumiri[i]+"("+h+")";
         h++;
    }
};
 