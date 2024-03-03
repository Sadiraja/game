let button1=document.querySelector(".box1");
let button2=document.querySelector(".box2");
let button3=document.querySelector(".box3");
let button4=document.querySelector(".box4");
let button5=document.querySelector(".box5");
let button6=document.querySelector(".box6");
let button7=document.querySelector(".box7");
let button8=document.querySelector(".box8");
let button9=document.querySelector(".box9");
let button=document.querySelector(".box")
let check="o";
let player1=document.querySelector(".first");
let player2=document.querySelector(".second");
player2.classList.add("visibilty")
let num=0;
let reset=document.querySelector(".reset");
reset.addEventListener("click",function(){
    location.reload();
})

button1.addEventListener("click",function(){
    if(document.querySelector("body").style.backgroundColor==="red"){
        return;
    }
        if(check==="o"){
            button1.innerHTML="x";
            check="x";
            player1.classList.add("visibilty")
            player2.classList.remove("visibilty")
        }
        else{
            button1.innerHTML="o";
            check="o";
            player1.classList.remove("visibilty")
            player2.classList.add("visibilty")
        }
    
    num++;

    if(button1.innerHTML==="x" && button2.innerHTML==="x" && button3.innerHTML==="x"){
       document.querySelector("body").style.backgroundColor="red";
      player2.classList.add("visibilty");
      player1.classList.remove("visibilty")
       player1.innerHTML="Player 1 is winner";
       
    }
    else if(button1.innerHTML==="x" && button4.innerHTML==="x" && button7.innerHTML==="x"){
        document.querySelector("body").style.backgroundColor="red";
        player2.classList.add("visibilty");
      player1.classList.remove("visibilty")
       player1.innerHTML="Player 1 is winner";
       
    }
    else if(button1.innerHTML==="x" && button5.innerHTML==="x" && button9.innerHTML==="x"){
        document.querySelector("body").style.backgroundColor="red";
        player2.classList.add("visibilty");
      player1.classList.remove("visibilty")
       player1.innerHTML="Player 1 is winner";
       
    }
    else if(button1.innerHTML==="o" && button2.innerHTML==="o" && button3.innerHTML==="o"){
        document.querySelector("body").style.backgroundColor="red";
       player1.classList.add("visibilty");
      player2.classList.remove("visibilty")
       player2.innerHTML="Player 2 is winner";
        
     }
     else if(button1.innerHTML==="o" && button4.innerHTML==="o" && button7.innerHTML==="o"){
         document.querySelector("body").style.backgroundColor="red";
         player1.classList.add("visibilty");
      player2.classList.remove("visibilty")
       player2.innerHTML="Player 2 is winner";
        
     }
     else if(button1.innerHTML==="o" && button5.innerHTML==="o" && button9.innerHTML==="o"){
         document.querySelector("body").style.backgroundColor="red";
         player1.classList.add("visibilty");
      player2.classList.remove("visibilty")
       player2.innerHTML="Player 2 is winner";
     }
    else if(num===9){
        player1.classList.add("visibilty");
        player2.classList.add("visibilty")
        document.querySelector(".Draw").classList.remove("Draw")
    }
},{once:true})
button2.addEventListener("click",function(){
    if(document.querySelector("body").style.backgroundColor==="red"){
        return;
    }
    if(check==="o"){
        button2.innerHTML="x";
        check="x";
        player1.classList.add("visibilty")
        player2.classList.remove("visibilty")
    }
    else{
        button2.innerHTML="o";
        check="o";
        player1.classList.remove("visibilty")
        player2.classList.add("visibilty")
    }
    num++;
    if(button1.innerHTML==="x" && button2.innerHTML==="x" && button3.innerHTML==="x"){
        document.querySelector("body").style.backgroundColor="red";
        player2.classList.add("visibilty");
        player1.classList.remove("visibilty")
         player1.innerHTML="Player 1 is winner";
        
     }
     else if(button2.innerHTML==="x" && button5.innerHTML==="x" && button8.innerHTML==="x"){
         document.querySelector("body").style.backgroundColor="red";
         player2.classList.add("visibilty");
         player1.classList.remove("visibilty")
          player1.innerHTML="Player 1 is winner";
     }
    
     else if(button1.innerHTML==="o" && button2.innerHTML==="o" && button3.innerHTML==="o"){
         document.querySelector("body").style.backgroundColor="red";
         player1.classList.add("visibilty");
         player2.classList.remove("visibilty")
          player2.innerHTML="Player 2 is winner";
      }
      else if(button2.innerHTML==="o" && button5.innerHTML==="o" && button8.innerHTML==="o"){
          document.querySelector("body").style.backgroundColor="red";
          player1.classList.add("visibilty");
          player2.classList.remove("visibilty")
           player2.innerHTML="Player 2 is winner";
      }
      
      else if(num===9){
        player1.classList.add("visibilty");
        player2.classList.add("visibilty")
        document.querySelector(".Draw").classList.remove("Draw")
    }
},{once:true})
button3.addEventListener("click",function(){
    if(document.querySelector("body").style.backgroundColor==="red"){
        return;
    }
    if(check==="o"){
        button3.innerHTML="x";
        check="x";
        player1.classList.add("visibilty")
        player2.classList.remove("visibilty")
    }
    else{
        button3.innerHTML="o";
        check="o";
        player1.classList.remove("visibilty")
        player2.classList.add("visibilty")
    }
    num++;
    if(button1.innerHTML==="x" && button2.innerHTML==="x" && button3.innerHTML==="x"){
        document.querySelector("body").style.backgroundColor="red";
        player2.classList.add("visibilty");
        player1.classList.remove("visibilty")
         player1.innerHTML="Player 1 is winner";
        
     }
     else if(button3.innerHTML==="x" && button6.innerHTML==="x" && button9.innerHTML==="x"){
         document.querySelector("body").style.backgroundColor="red";
         player2.classList.add("visibilty");
         player1.classList.remove("visibilty")
          player1.innerHTML="Player 1 is winner";
     }
     else if(button3.innerHTML==="x" && button5.innerHTML==="x" && button7.innerHTML==="x"){
         document.querySelector("body").style.backgroundColor="red";
         player2.classList.add("visibilty");
         player1.classList.remove("visibilty")
          player1.innerHTML="Player 1 is winner";
     }
     else if(button1.innerHTML==="o" && button2.innerHTML==="o" && button3.innerHTML==="o"){
         document.querySelector("body").style.backgroundColor="red";
         player1.classList.add("visibilty");
         player2.classList.remove("visibilty")
          player2.innerHTML="Player 2 is winner";
      }
      else if(button3.innerHTML==="o" && button6.innerHTML==="o" && button9.innerHTML==="o"){
          document.querySelector("body").style.backgroundColor="red";
          player1.classList.add("visibilty");
          player2.classList.remove("visibilty")
           player2.innerHTML="Player 2 is winner";
      }
      else if(button3.innerHTML==="o" && button5.innerHTML==="o" && button7.innerHTML==="o"){
          document.querySelector("body").style.backgroundColor="red";
          player1.classList.add("visibilty");
      player2.classList.remove("visibilty")
       player2.innerHTML="Player 2 is winner";
      }
      else if(num===9){
        player1.classList.add("visibilty");
        player2.classList.add("visibilty")
        document.querySelector(".Draw").classList.remove("Draw")
    }
},{once:true})

button4.addEventListener("click",function(){
    if(document.querySelector("body").style.backgroundColor==="red"){
        return;
    }
    if(check==="o"){
        button4.innerHTML="x";
        check="x";
        player1.classList.add("visibilty")
        player2.classList.remove("visibilty")
    }
    else{
        button4.innerHTML="o";
        check="o";
        player1.classList.remove("visibilty")
        player2.classList.add("visibilty")
    }
    num++;
    if(button1.innerHTML==="x" && button4.innerHTML==="x" && button7.innerHTML==="x"){
        document.querySelector("body").style.backgroundColor="red";
        player2.classList.add("visibilty");
        player1.classList.remove("visibilty")
         player1.innerHTML="Player 1 is winner";
        
     }
     else if(button4.innerHTML==="x" && button5.innerHTML==="x" && button6.innerHTML==="x"){
         document.querySelector("body").style.backgroundColor="red";
         player2.classList.add("visibilty");
         player1.classList.remove("visibilty")
          player1.innerHTML="Player 1 is winner";
     }
    
     else if(button1.innerHTML==="o" && button2.innerHTML==="o" && button3.innerHTML==="o"){
         document.querySelector("body").style.backgroundColor="red";
         player1.classList.add("visibilty");
         player2.classList.remove("visibilty")
          player2.innerHTML="Player 2 is winner";
      }
      else if(button4.innerHTML==="o" && button5.innerHTML==="o" && button6.innerHTML==="o"){
          document.querySelector("body").style.backgroundColor="red";
          player1.classList.add("visibilty");
          player2.classList.remove("visibilty")
           player2.innerHTML="Player 2 is winner";
      }
      
      else if(num===9){
        player1.classList.add("visibilty");
        player2.classList.add("visibilty")
        document.querySelector(".Draw").classList.remove("Draw")
    }
     
},{once:true})
button5.addEventListener("click",function(){
    if(document.querySelector("body").style.backgroundColor==="red"){
        return;
    }
    if(check==="o"){
        button5.innerHTML="x";
        check="x";
        player1.classList.add("visibilty")
        player2.classList.remove("visibilty")
    }
    else{
        button5.innerHTML="o";
        check="o";
        player1.classList.remove("visibilty")
        player2.classList.add("visibilty")
    }
    num++;
    if(button1.innerHTML==="x" && button5.innerHTML==="x" && button9.innerHTML==="x"){
        document.querySelector("body").style.backgroundColor="red";
        player2.classList.add("visibilty");
      player1.classList.remove("visibilty")
       player1.innerHTML="Player 1 is winner";
        
     }
     else if(button3.innerHTML==="x" && button5.innerHTML==="x" && button7.innerHTML==="x"){
         document.querySelector("body").style.backgroundColor="red";
         player2.classList.add("visibilty");
         player1.classList.remove("visibilty")
          player1.innerHTML="Player 1 is winner";
     }
     else if(button4.innerHTML==="x" && button5.innerHTML==="x" && button6.innerHTML==="x"){
         document.querySelector("body").style.backgroundColor="red";
         player2.classList.add("visibilty");
         player1.classList.remove("visibilty")
          player1.innerHTML="Player 1 is winner";
     }
     else if(button2.innerHTML==="x" && button5.innerHTML==="x" && button8.innerHTML==="x"){
        document.querySelector("body").style.backgroundColor="red";
       
    }
    else if(button1.innerHTML==="o" && button5.innerHTML==="o" && button9.innerHTML==="o"){
        document.querySelector("body").style.backgroundColor="red";
        player1.classList.add("visibilty");
      player2.classList.remove("visibilty")
       player2.innerHTML="Player 2 is winner";
        
     }
     else if(button3.innerHTML==="o" && button5.innerHTML==="o" && button7.innerHTML==="o"){
         document.querySelector("body").style.backgroundColor="red";
         player1.classList.add("visibilty");
         player2.classList.remove("visibilty")
          player2.innerHTML="Player 2 is winner";
     }
     else if(button4.innerHTML==="o" && button5.innerHTML==="o" && button6.innerHTML==="o"){
         document.querySelector("body").style.backgroundColor="red";
         player1.classList.add("visibilty");
         player2.classList.remove("visibilty")
          player2.innerHTML="Player 2 is winner";
     }
     else if(button2.innerHTML==="o" && button5.innerHTML==="o" && button8.innerHTML==="o"){
        document.querySelector("body").style.backgroundColor="red";
        player1.classList.add("visibilty");
        player2.classList.remove("visibilty")
         player2.innerHTML="Player 2 is winner";
    }
   else if(num===9){
        player1.classList.add("visibilty");
        player2.classList.add("visibilty")
        document.querySelector(".Draw").classList.remove("Draw")
    }
},{once:true})
button6.addEventListener("click",function(){
    if(document.querySelector("body").style.backgroundColor==="red"){
        return;
    }
    if(check==="o"){
        button6.innerHTML="x";
        check="x";
        player1.classList.add("visibilty")
        player2.classList.remove("visibilty")
    }
    else{
        button6.innerHTML="o";
        check="o";
        player1.classList.remove("visibilty")
        player2.classList.add("visibilty")
    }
    num++;
    if(button3.innerHTML==="x" && button6.innerHTML==="x" && button9.innerHTML==="x"){
        document.querySelector("body").style.backgroundColor="red";
        player2.classList.add("visibilty");
        player1.classList.remove("visibilty")
         player1.innerHTML="Player 1 is winner";
        
     }
     else if(button4.innerHTML==="x" && button5.innerHTML==="x" && button6.innerHTML==="x"){
         document.querySelector("body").style.backgroundColor="red";
         player2.classList.add("visibilty");
         player1.classList.remove("visibilty")
          player1.innerHTML="Player 1 is winner";
     }
    
     else if(button3.innerHTML==="o" && button6.innerHTML==="o" && button9.innerHTML==="o"){
         document.querySelector("body").style.backgroundColor="red";
         player1.classList.add("visibilty");
         player2.classList.remove("visibilty")
          player2.innerHTML="Player 2 is winner";
      }
      else if(button4.innerHTML==="o" && button5.innerHTML==="o" && button6.innerHTML==="o"){
          document.querySelector("body").style.backgroundColor="red";
          player1.classList.add("visibilty");
          player2.classList.remove("visibilty")
           player2.innerHTML="Player 2 is winner";
      }
     else if(num===9){
        player1.classList.add("visibilty");
        player2.classList.add("visibilty")
        document.querySelector(".Draw").classList.remove("Draw")
    }
},{once:true})
button7.addEventListener("click",function(){
    if(document.querySelector("body").style.backgroundColor==="red"){
        return;
    }
    if(check==="o"){
        button7.innerHTML="x";
        check="x";
        player1.classList.add("visibilty")
        player2.classList.remove("visibilty")
    }
    else{
        button7.innerHTML="o";
        check="o";
        player1.classList.remove("visibilty")
        player2.classList.add("visibilty")
    }
    num++;
    if(button1.innerHTML==="x" && button4.innerHTML==="x" && button7.innerHTML==="x"){
        document.querySelector("body").style.backgroundColor="red";
        player2.classList.add("visibilty");
        player1.classList.remove("visibilty")
         player1.innerHTML="Player 1 is winner";
        
     }
     else if(button3.innerHTML==="x" && button5.innerHTML==="x" && button7.innerHTML==="x"){
         document.querySelector("body").style.backgroundColor="red";
         player2.classList.add("visibilty");
         player1.classList.remove("visibilty")
          player1.innerHTML="Player 1 is winner";
     }
     else if(button7.innerHTML==="x" && button8.innerHTML==="x" && button9.innerHTML==="x"){
         document.querySelector("body").style.backgroundColor="red";
         player2.classList.add("visibilty");
         player1.classList.remove("visibilty")
          player1.innerHTML="Player 1 is winner";
     }
     else if(button1.innerHTML==="o" && button4.innerHTML==="o" && button7.innerHTML==="o"){
         document.querySelector("body").style.backgroundColor="red";
         player1.classList.add("visibilty");
         player2.classList.remove("visibilty")
          player2.innerHTML="Player 2 is winner";
      }
      else if(button3.innerHTML==="o" && button5.innerHTML==="o" && button7.innerHTML==="o"){
          document.querySelector("body").style.backgroundColor="red";
          player1.classList.add("visibilty");
          player2.classList.remove("visibilty")
           player2.innerHTML="Player 2 is winner";
      }
      else if(button7.innerHTML==="o" && button8.innerHTML==="o" && button9.innerHTML==="o"){
          document.querySelector("body").style.backgroundColor="red";
          player1.classList.add("visibilty");
      player2.classList.remove("visibilty")
       player2.innerHTML="Player 2 is winner";
      }
     else if(num===9){
        player1.classList.add("visibilty");
        player2.classList.add("visibilty")
        document.querySelector(".Draw").classList.remove("Draw")
    }
},{once:true})
button8.addEventListener("click",function(){
    if(document.querySelector("body").style.backgroundColor==="red"){
        return;
    }
    if(check==="o"){
        button8.innerHTML="x";
        check="x";
        player1.classList.add("visibilty")
        player2.classList.remove("visibilty")
    }
    else{
        button8.innerHTML="o";
        check="o";
        player1.classList.remove("visibilty")
        player2.classList.add("visibilty")
    }
    num++;
      if(button2.innerHTML==="x" && button5.innerHTML==="x" && button8.innerHTML==="x"){
         document.querySelector("body").style.backgroundColor="red";
         player2.classList.add("visibilty");
         player1.classList.remove("visibilty")
          player1.innerHTML="Player 1 is winner";
     }
     else if(button7.innerHTML==="x" && button8.innerHTML==="x" && button9.innerHTML==="x"){
         document.querySelector("body").style.backgroundColor="red";
         player2.classList.add("visibilty");
         player1.classList.remove("visibilty")
          player1.innerHTML="Player 1 is winner";
     }
    
      else if(button2.innerHTML==="o" && button5.innerHTML==="o" && button8.innerHTML==="o"){
          document.querySelector("body").style.backgroundColor="red";
          player1.classList.add("visibilty");
          player2.classList.remove("visibilty")
           player2.innerHTML="Player 2 is winner";
      }
      else if(button7.innerHTML==="o" && button8.innerHTML==="o" && button9.innerHTML==="o"){
          document.querySelector("body").style.backgroundColor="red";
          player1.classList.add("visibilty");
      player2.classList.remove("visibilty")
       player2.innerHTML="Player 2 is winner";
      }
     else if(num===9){
        player1.classList.add("visibilty");
        player2.classList.add("visibilty")
        document.querySelector(".Draw").classList.remove("Draw")
    }
},{once:true})
button9.addEventListener("click",function(){
    if(document.querySelector("body").style.backgroundColor==="red"){
        return;
    }
    if(check==="o"){
        button9.innerHTML="x";
        check="x";
        player1.classList.add("visibilty")
        player2.classList.remove("visibilty")
    }
    else{
        button9.innerHTML="o";
        check="o";
        player1.classList.remove("visibilty")
        player2.classList.add("visibilty")
    }
    num++;
     if(button1.innerHTML==="x" && button5.innerHTML==="x" && button9.innerHTML==="x"){
        document.querySelector("body").style.backgroundColor="red";
        player2.classList.add("visibilty");
        player1.classList.remove("visibilty")
         player1.innerHTML="Player 1 is winner";
        
     }
     else if(button3.innerHTML==="x" && button6.innerHTML==="x" && button9.innerHTML==="x"){
         document.querySelector("body").style.backgroundColor="red";
         player2.classList.add("visibilty");
         player1.classList.remove("visibilty")
          player1.innerHTML="Player 1 is winner";
     }
     else if(button7.innerHTML==="x" && button8.innerHTML==="x" && button9.innerHTML==="x"){
         document.querySelector("body").style.backgroundColor="red";
         player2.classList.add("visibilty");
         player1.classList.remove("visibilty")
          player1.innerHTML="Player 1 is winner";
     }
    else if(button1.innerHTML==="o" && button5.innerHTML==="o" && button9.innerHTML==="o"){
         document.querySelector("body").style.backgroundColor="red";
         player1.classList.add("visibilty");
         player2.classList.remove("visibilty")
          player2.innerHTML="Player 2 is winner";
      }
      else if(button3.innerHTML==="o" && button6.innerHTML==="o" && button9.innerHTML==="o"){
          document.querySelector("body").style.backgroundColor="red";
          player1.classList.add("visibilty");
          player2.classList.remove("visibilty")
           player2.innerHTML="Player 2 is winner";
      }
      else if(button7.innerHTML==="o" && button8.innerHTML==="o" && button9.innerHTML==="o"){
          document.querySelector("body").style.backgroundColor="red";
          player1.classList.add("visibilty");
      player2.classList.remove("visibilty")
       player2.innerHTML="Player 2 is winner";
      }
      
    else if(num===9){
        player1.classList.add("visibilty");
        player2.classList.add("visibilty")
        document.querySelector(".Draw").classList.remove("Draw")
    }
},{once:true})


/*
button.addEventListener("click",function(){
    if(button1.innerHTML==="x" && button2.innerHTML==="x" && button3.innerHTML==="x"|| button1.innerHTML==="x" && button4.innerHTML==="x" && button7.innerHTML==="x" || button1.innerHTML==="x" && button5.innerHTML==="x" && button9.innerHTML==="x"||button2.innerHTML==="x" && button5.innerHTML==="x" && button8.innerHTML==="x"||button3.innerHTML==="x" && button5.innerHTML==="x" && button7.innerHTML==="x"||button3.innerHTML==="x" && button6.innerHTML==="x" && button9.innerHTML==="x"||button4.innerHTML==="x" && button5.innerHTML==="x" && button6.innerHTML==="x"||button7.innerHTML==="x" && button8.innerHTML==="x" && button9.innerHTML==="x"||button1.innerHTML==="o" && button2.innerHTML==="o"&& button3.innerHTML==="o"|| button1.innerHTML==="o" && button4.innerHTML==="o" && button7.innerHTML==="o" || button1.innerHTML==="o" && button5.innerHTML==="o" && button9.innerHTML==="o"||button2.innerHTML==="o" && button5.innerHTML==="o" && button8.innerHTML==="o"||button3.innerHTML==="o" && button5.innerHTML==="o" && button7.innerHTML==="o"||button3.innerHTML==="o" && button6.innerHTML==="o" && button9.innerHTML==="o"||button4.innerHTML==="o" && button5.innerHTML==="o" && button6.innerHTML==="o"||button7.innerHTML==="o" && button8.innerHTML==="o" && button9.innerHTML==="o"){
    }
    else{
        document.querySelector(".Draw").classList.remove("Draw")
    }
})
*/

