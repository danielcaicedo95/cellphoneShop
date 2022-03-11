function clickButton(){
  
 let clickMenu = document.querySelectorAll(".nav-link");
    
    for(i=0; i<clickMenu.length; i++){
        clickMenu[i].classList.toggle("dissapear");
       };

};

function product(){
    let navigation = document.querySelector(".container");
    navigation.classList.toggle("noView");
   };
   
function product1(){
    let navigation = document.querySelector(".container");
    navigation.classList.toggle("noView1");
   };

/* function product(){
    let navigation = document.querySelector(".container");
    navigation.classList.toggle("noView2");
   };

function product(){
    let navigation = document.querySelector(".container");
    navigation.classList.toggle("noView3");
   }; */








/* let priceRandom = document.querySelectorAll(".priceRandom")
for(price of priceRandom){
    let num = Math.round(Math.random()*10 + 300);
    document.getElementById("price").innerHTML = `$ ${num}`; 
}
 */


    

 /* let navigation = document.querySelector(".nav-link");
    let text = navigation.value;
    console.log(navigation)
    let images  =[];

    for(i=0; i<8; i++){
        images[i] = `<img title="${text}" src="imagenes/${text}.png">`
    }; */