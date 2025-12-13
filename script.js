const bar=document.querySelector("#mobile-bar");
const nav=document.querySelector(".bar");
const close=document.querySelector("#close");

if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add("active");
    })
}

if(close){
    close.addEventListener("click",()=>{
        nav.classList.remove("active");
    })
}




