const photos= document.querySelectorAll(".memory-card");


let hasFlippedCard=false;
let lock=false;
let firstCard,secondCard;

function flipcard(){
    // console.log("I was clicked");
    // console.log(this);

    //this.classList.toggle("flip");
    if(lock){
        return;
    }
    this.classList.add("flip")
    if(!hasFlippedCard){
        //first click
        hasFlippedCard=true;
        firstCard=this;
        //console.log(hasFlippedCard, firstCard)
    }else{
        hasFlippedCard=false;
        secondCard=this;

        checkForMatch();
    }
}

          //console.log(hasFlippedCard, firstCard)
         //console.log(firstCard.dataset.framework);
         //console.log(secondCard.dataset.framework);
         //do cards match
         function checkForMatch(){
         if(firstCard.dataset.framework===secondCard.dataset.framework){
             disableCards();
         }
         else{
             unFlipCards()
         }
          function disableCards(){
             firstCard.removeEventListener("click",flipcard);
             secondCard.removeEventListener("click",flipcard)
         }
        
         //console.log("Function is executed");
         function unFlipCards(){
             lock=true;
             setTimeout(function(){
               firstCard.classList.remove("flip");
               secondCard.classList.remove("flip");
               lock=false;
             },1500)
         }
    }


(function shuffle(){
    let random;
    photos.forEach(function(photo){
        random=Math.floor(Math.random()*12);
        photo.style.order=random;
    })
})();



photos.forEach(function(photo){

    photo.addEventListener("click",flipcard)
    
})