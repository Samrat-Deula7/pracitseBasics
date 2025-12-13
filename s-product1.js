var smallimg=document.getElementsByClassName("small-img");
var info=document.getElementById("info");


smallimg[0].addEventListener("click",()=>{
    info.innerText="Earrings";
})
smallimg[1].addEventListener("click",()=>{
    info.innerText=" Hand Grip Multicolor/ 150kg metal spring";
})
smallimg[2].addEventListener("click",()=>{
    info.innerText="  New KIYU KIYBOSS 1.8L Premium Quality water heater";
})
smallimg[3].addEventListener("click",()=>{
    info.innerText="  48 pcs Fashionable pearl earrings";
})
smallimg[4].addEventListener("click",()=>{
    info.innerText="  1pcs Black Creative Iron Door hanger";
})
smallimg[5].addEventListener("click",()=>{
    info.innerText=" The Derma Co. 1% Hyaluraonic Sunscreen";
})


var qty=document.querySelector("#qty");
var mpPrice=document.querySelector("#price");
const btn=document.querySelector("#btn");


const totalCost =(total)=>{
    document.querySelector("#cost").innerText=`You Total Price is :Rs${total}  `;
 
};

btn.addEventListener("click",()=>{
   
    var cost=mpPrice.innerText;
    console.log(cost);
   var quantity=qty.value;
  console.log(quantity);
 
  let total=mpPrice.innerText*qty.value;
  
//   document.querySelector("#cost").innerText=total;

  totalCost(total);
});

// `You Win Your ${userChoice} beats ${compChoice}`