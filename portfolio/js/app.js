const namebox = document.getElementById("name");
const emailbox = document.getElementById("email");
const mobilebox = document.getElementById("mobile");

const messagebox = document.getElementById("message");


// Saps on for Name Field

 function capsOn(){
    namebox.style.textTransform="uppercase";
 }
 
 namebox.addEventListener("keyup", capsOn);



//  Caps OFF for Email field

emailbox.addEventListener("keyup", function(){
    emailbox.style.textTransform="lowercase";
});


// Validation of Mobile Field

mobilebox.addEventListener("keyup", function (){
    if((mobilebox.value).length < 10 || (mobilebox.value).length > 10){
        mobilebox.style.border="4px solid red";
    }else{
        mobilebox.style.border="4px solid green";
    }

    console.log((mobilebox.value).length);
});


// Validate of Message textArea







// ********************************************


// Start Counter

var counter1 = document.getElementById("counter1");
var counter2 = document.getElementById("counter2");
var counter3 = document.getElementById("counter3");



var count=0;

function startCounter(){
    if(count < 57845){
        count += 10;
        counter1.innerHTML = count + "K";
    }

    if(count < 55520){
        count += 10;
        counter2.innerHTML = count + "K";
    }

    if(count < 59580){
        count += 10;
        counter3.innerHTML = count + "K";
    }


    setTimeout(startCounter,1);
}

// End Counter

// *********************************************