let button=document.querySelectorAll(".box");
let check="O";
let checkwinner=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
let end=false;
let num=0;
let reset=document.querySelector(".reset");
reset.addEventListener("click",function(){
    location.reload();
})

document.querySelector(".second").classList.add("visibilty")
button.forEach((box)=> {
    
    box.addEventListener("click",function(){
     
        if(end===true){
       return;
        }
        if(check==="O"){
            document.querySelector(".first").classList.add("visibilty");
            document.querySelector(".second").classList.remove("visibilty")
            box.innerHTML="X";
            check="X";

            checking(check);
            
           
        }
        else{
            document.querySelector(".first").classList.remove("visibilty");
            document.querySelector(".second").classList.add("visibilty");
            box.innerHTML="O";
            check="O";
            checking(check);
            
        }
       num++;
      if(end===false && num===9){
      
            document.querySelector(".second").classList.add("visibilty")
            document.querySelector(".Draw").classList.remove("Draw");

      }
    },{once:true})
});



const checking = (check)=>{
    for(pattern of checkwinner){
      let  post1=button[pattern[0]].innerHTML;
       let post2=button[pattern[1]].innerHTML;
        let post3=button[pattern[2]].innerHTML;
       
        if(post1 !="" && post2!="" && post3!=""){

            if(post1===post2 && post2===post3){
            
          if(check==="X"){
            
          document.querySelector(".second").classList.add("visibilty");
          document.querySelector(".first").classList.remove("visibilty");
            document.querySelector(".first").innerHTML="Player 1 is Winner";
            end=true;
            
          }
          else{
            document.querySelector(".second").classList.remove("visibilty");
            document.querySelector(".first").classList.add("visibilty")
            document.querySelector(".second").innerHTML="Player 2 is Winner";
            end=true;
           
          }

            }
        }
    }
}

    
