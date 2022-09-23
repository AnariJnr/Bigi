
var delayCaption = document.querySelectorAll("div.carousel-caption");

// delayCaption.forEach(function(delay){
 
//   if(delay.parentElement.classList.contains("active")){
//     setInterval(function(){
//       // console.log("world");
//       delay.style.transform = "scale(1)";
//       delay.style.transition = "1s"
//       // delayCaption.style.transitionDelay = "2s";
//     },3000);
//   }
// });

setInterval(function(){
  // console.log("world");
  delayCaption[0].style.transform = "scale(1)";
  delayCaption[0].style.transition = "1s";
  // delayCaption.style.transitionDelay = "2s";
},3000);




setInterval(function(){
  // console.log("world");
  delayCaption[1].style.transform = "scale(1)";
  delayCaption[1].style.transition = "1s";
  // delayCaption.style.transitionDelay = "2s";
},8000);


setInterval(function(){
  // console.log("world");
  delayCaption[2].style.transform = "scale(1)";
  delayCaption[2].style.transition = "1s";
  // delayCaption.style.transitionDelay = "2s";
},13000);


// contact-line


var xmark = document.querySelector(".fa-solid.fa-xmark");
var navbar = document.querySelector(".navbar");
var projectName = document.querySelector(".projectName");
var contactLine = document.querySelector(".contact-line");

xmark.addEventListener("click",function(){
  contactLine.classList.add("none");
  navbar.style.marginTop = "0px";
  projectName.style.marginTop = "127px";
});

// carousel-indicators on click

var indicators = document.querySelectorAll(".carousel-indicators li");

indicators.forEach(function(indicator){
  indicator.addEventListener("click",function(e){
    delayCaption[2].style.transform = "scale(0)";
    delayCaption[1].style.transform = "scale(0)";
    delayCaption[0].style.transform = "scale(0)";
    if(e.currentTarget.classList.contains("active")){
      setInterval(function(){
        // console.log("world");
        delayCaption[0].style.transform = "scale(1)";
        delayCaption[0].style.transition = "1s";
        // delayCaption.style.transitionDelay = "2s";
      },3000);

    }
    

    if(e.currentTarget.classList.contains("active_2")){
      setInterval(function(){
        // console.log("world");
        delayCaption[1].style.transform = "scale(1)";
        delayCaption[1].style.transition = "1s";
        // delayCaption.style.transitionDelay = "2s";
      },3000);
    }

    if(e.currentTarget.classList.contains("active_3")){
      setInterval(function(){
        // console.log("world");
        delayCaption[2].style.transform = "scale(1)";
        delayCaption[2].style.transition = "1s";
        // delayCaption.style.transitionDelay = "2s";
      },3000);
    }

    console.log(e.currentTarget.classList);
  });
 
});


// scroll 

var topContactLine = document.querySelector(".contact-line");
var contactLineheight= topContactLine.getBoundingClientRect().height;


window.addEventListener("scroll", function(){
 var windowHeight = window.pageYOffset;
if(windowHeight > contactLineheight){
  contactLine.classList.add("none");
  navbar.style.marginTop = "0px";
}else{
  contactLine.classList.remove("none");
  navbar.style.marginTop = "50px";
}
});


// getting current year

var year = document.querySelector(".currentYear");

var displayYear = new Date().getFullYear();
year.innerHTML = displayYear;
// console.log(displayYear);

