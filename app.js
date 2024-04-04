let gameSeq = [];
let userSeq=[];
let color = ["red","orange","green","blue"];

let gamestarted = false;
let level = 0;
let heading2 = document.querySelector("h2");
let hScore = document.querySelector("h3");
let heightest_score = 0;



document.addEventListener("keypress",function(){
        if(gamestarted == false){
            console.log("key was pressed");
            gamestarted=true;
            levelUp();
        }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function levelUp(){
    userSeq = [];
    level++;


    if(heightest_score<level){
        heightest_score=level;
    }
    hScore.innerText = `Heightest score is: ${heightest_score}`;


    heading2.innerText = `Level ${level}`;

    let randomIndex = Math.floor(Math.random()*4);
    let randomColor = color[randomIndex];
    gameSeq.push(randomColor);
    console.log(gameSeq);

    let randomBtn = document.querySelector(`.${randomColor}`);


    btnFlash(randomBtn);
}

function checkAns(index){
    if(userSeq[index]===gameSeq[index]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }
        
    }else{
        heading2.innerHTML = `Game over!! Your Score was ${level} <br> Press any key to start`;
        document.querySelector(".main").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector(".main").style.backgroundColor = "white";
        },150);
        reset();
    }

}

function btnPressed(){
    let btn = this;
    btnFlash(btn);
    let element = btn.getAttribute("id");
    userSeq.push(element);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".box");
for(btn of allBtns){
    btn.addEventListener("click",btnPressed);
}

function reset(){
    gameSeq = [];
    userSeq = [];
    level=0;
    gamestarted=false;
}