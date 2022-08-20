var progress = document.querySelector(".progress-bar");
var text = document.querySelector(".width-percent");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

var count = 0;
var timer = false;

function start(){
    timer = true;
        
        nowDone();
    
}


function stop(){
    if(timer == true){
        timer = false;
        clearTimeout(nowDone);
        btn1.style.visibility = "visible";
        btn1.innerHTML="resume now";
    }

}

function reset(){
        timer = false;
        clearTimeout(nowDone);
        count = 0;
        progress.style.width = count+"%";
        text.innerHTML=count+"%";
        btn1.style.visibility = "visible";
        btn1.innerHTML="start";
    
}


function nowDone(){

   if(timer == true){
    if(count < 100){
        count++;
        btn1.style.visibility = "hidden";
    }else{
        btn1.style.visibility = "visible";
        btn1.innerHTML="start";
    }

    progress.style.width = count+"%";
    text.innerHTML=count+"%";
    setTimeout(nowDone, 1000);
   }

}
