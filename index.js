function clickButton(){
  
 let clickMenu = document.querySelectorAll(".nav-link");
    
    for(i=0; i<clickMenu.length; i++){
        clickMenu[i].classList.toggle("dissapear");
       };

};

function product(){
    let navigation= document.querySelector(".container");
    navigation.classList.toggle("view1")
   };

function product2(){
    let navigation= document.querySelector(".container2");
    navigation.classList.toggle("view2")
   };

function product3(){
    let navigation= document.querySelector(".container3");
    navigation.classList.toggle("view3")
   };

function product4(){
    let navigation= document.querySelector(".container4");
    navigation.classList.toggle("view4")
   };


function buttonBuy(){
    let confirm = window.confirm("Do you want to buy this cell phone?");
    if(confirm==true){
        alert("Added to shopping cart")
    }
}





