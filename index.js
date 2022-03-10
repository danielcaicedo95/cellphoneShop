function clickButton(){
  
 let clickMenu = document.querySelectorAll(".nav-link");
    
    for(i=0; i<clickMenu.length; i++){
        clickMenu[i].classList.toggle("dissapear");
       };

};

