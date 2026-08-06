const text="Future Software Engineer | AI Enthusiast | DevOps Learner";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,70);

}

}

typing();

document.getElementById("themeBtn").onclick=function(){

document.body.classList.toggle("light");

};

function scrollToSection(){

document.getElementById("about").scrollIntoView();

}

function sendMessage(){

alert("✅ Thank you! Your message has been received.");

}

const counters=[
["projectsCount",15],
["skillsCount",8],
["coffeeCount",999]
];

counters.forEach(counter=>{

let value=0;

let id=counter[0];

let target=counter[1];

let interval=setInterval(()=>{

value++;

document.getElementById(id).innerHTML=value;

if(value>=target) clearInterval(interval);

},20);

});

let topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
