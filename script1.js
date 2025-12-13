

var smallimg=document.getElementsByClassName("small-img");
var info=document.getElementById("info");
var price=document.getElementById("price");

smallimg[0].addEventListener("click",()=>{
    price.innerText=90;
})
smallimg[1].addEventListener("click",()=>{
    price.innerText=150;
})

smallimg[2].addEventListener("click",()=>{
    price.innerText=690;
})
smallimg[3].addEventListener("click",()=>{
    price.innerText=187;
})
smallimg[4].addEventListener("click",()=>{
    price.innerText=255;
})
smallimg[5].addEventListener("click",()=>{
    price.innerText=759;
})


