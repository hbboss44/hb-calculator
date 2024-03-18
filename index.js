let p=document.querySelector("section").children[0]
// Number(p.innerHTML)
let button=document.querySelectorAll("button")
let a=document.querySelector("section").children[4]
let bif=document.querySelector(".thirdLine").children[0]
// bif.addEventListener("click",function(){
//     p.textContent+="/100"
    
// })
a.addEventListener("click",function(){
    let pToString=String(p.innerHTML)
        let a=eval(pToString)
        p.innerHTML=a
})
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click",function(e){ 
                     
        p.innerHTML+=button[i].innerHTML
         if(e.target.innerHTML=="AC"){
            p.textContent=""
         }
        })
            
    }