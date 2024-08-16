let counters = document.querySelector(".counters");
let run = document.querySelector(".run");
let reset =document.querySelector(".reset");
let next = document.querySelector(".Next");
let finish =document.querySelector(".Finish");
let team =document.querySelector(".team");
let firstenning = 0;
let secondenning = 0;
let flag=true;



counters.addEventListener("click",(e)=>{
if(flag){
    firstenning=Number(e.target.textContent)+Number(firstenning);
    console.log(firstenning);
    console.log(flag);
    run.innerHTML = firstenning;
}
else{
     secondenning=Number(e.target.textContent)+Number(secondenning);
     run.innerHTML = secondenning;
     console.log(secondenning);
     console.log(flag);
}
})
    
finish.addEventListener("click",()=>{
    console.log("hey");
    if(firstenning===secondenning){
        run.innerHTML="matched is tie";
    }
    else if(firstenning>secondenning){
        run.innerHTML="first team wins";
    }
    else {
        run.innerHTML="second team wins";
    }
})

next.addEventListener("click",()=>{
    run.innerHTML=0;
    flag=false;
    next.style.display="none";
    finish.style.display="block";
    team.innerHTML="Second Enning";

})

reset.addEventListener("click",()=>{
    team.innerHTML="First Enning";
    flag=true;
    firstenning=0;
    secondenning=0;
    run.innerHTML=0;
    next.style.display="block";
    finish.style.display="none";
})