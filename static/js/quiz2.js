let arr1 = ["a","b", "c"]
let arr2 = ["a","b","c"]
let arr = ["aa","bc","cb"]
let container1 = document.getElementsByTagName("cont1")[0];
for(let i=0;i<arr1.length;i++){
    let div1=document.createElement("div");
    div1.innerText = arr1[i];
    div1.id = i;
    div1.style.backgroundColor="lightblue";
    div1.style.border="1px solid black";
    div1.style.position ="relative";
    div1.style.top = "1vh";
    div1.style.left = "1vh";
    div1.style.width="20vh";
    div1.style.height="20vh";
    div1.style.lineHeight = "9";
    div1.style.textAlign = "center";
    div1.style.marginLeft="2px";
    container1.append(div1)
}
let container2 = document.getElementsByTagName("cont2")[0];
for(let i=0;i<arr2.length;i++){
    let div1=document.createElement("div");
    div1.innerText = arr2[i];
    div1.id = arr1.length + i;
    div1.style.backgroundColor="lightblue";
    div1.style.border="1px solid black";
    div1.style.position ="relative";
    div1.style.top = "1vh";
    div1.style.left = "1vh";
    div1.style.width="20vh";
    div1.style.height="20vh";
    div1.style.lineHeight = "9";
    div1.style.textAlign = "center";
    div1.style.marginLeft="2px";
    container2.append(div1)
}
function numarRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function culoareRandom(){
    return "rgb(" + numarRandom(0, 255) + ", " + numarRandom(0, 255) + ", " + numarRandom(0, 255) + ")";
}
let oke = []
for(let i=0;i<arr1.length + arr2.length;++i)
    oke.push(0);
for(let i=0;i<arr1.length + arr2.length;++i){
    document.getElementById(i).addEventListener("click",event =>{
        let v = document.getElementById(i);
        onkeydown=function(event){
            let a = event.key; 
            if(v!=null){
                if(oke[i]==1){
                    event.stopPropagation();
                }
                else{
                    if(a == 'w' || a =='W'){
                        v.style.top = (parseInt(window.getComputedStyle(v).top) - 10) + 'px';
                        let x = verify()
                        if(x[0]!=false){
                            let col = culoareRandom();
                            document.getElementById(x[1][0]).style.backgroundColor = col;
                            document.getElementById(x[1][1]).style.backgroundColor = col;
                            oke[x[1][0]]=1;
                            oke[x[1][1]]=1;
                        }
                    }   
                        

                    if(a == 'a' || a=='A'){
                        v.style.left = (parseInt(window.getComputedStyle(v).left) - 10) + 'px';
                        let x = verify()
                        if(x[0]!=false){
                            let col = culoareRandom();
                            document.getElementById(x[1][0]).style.backgroundColor = col;
                            document.getElementById(x[1][1]).style.backgroundColor = col;
                            oke[x[1][0]]=1;
                            oke[x[1][1]]=1;
                        }
                    }
                            
                        
                    if(a == 'd' || a=='D'){
                        v.style.left = (parseInt(window.getComputedStyle(v).left) + 10) + 'px';
                        let x = verify()
                        if(x[0]!=false){
                            let col = culoareRandom();
                            document.getElementById(x[1][0]).style.backgroundColor = col;
                            document.getElementById(x[1][1]).style.backgroundColor = col;
                            oke[x[1][0]]=1;
                            oke[x[1][1]]=1;
                        }
                    }     
                    
                    if(a == 's' || a=='S'){
                        v.style.top = (parseInt(window.getComputedStyle(v).top) + 10) + 'px';
                        let x = verify()
                        if(x[0]!=false){
                            let col = culoareRandom();
                            document.getElementById(x[1][0]).style.backgroundColor = col;
                            document.getElementById(x[1][1]).style.backgroundColor = col;
                            oke[x[1][0]]=1;
                            oke[x[1][1]]=1;
                        }
                    }
                }
            }
        }
       
       
    }); 
   
}
function elementsOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();
  
    return !(
      domRect1.top > domRect2.bottom ||
      domRect1.right < domRect2.left ||
      domRect1.bottom < domRect2.top ||
      domRect1.left > domRect2.right
    );
}
function verify(){
    for(let i = 0; i < arr1.length; ++i){
        for(let j=0 ;j <arr2.length ; ++j){
        let h = j + arr1.length;
        let e1 = document.getElementById(i)
        let e2 =document.getElementById(h)
        let continut = e1.innerText+e2.innerText 
        
        if(e1.style.backgroundColor == "lightblue" && e2.style.backgroundColor == "lightblue" && elementsOverlap(e1,e2) == true)
            if(arr.find(element => element == continut))
                return [true,[i,h]];
        }
    }
    return [false,[]];
}
