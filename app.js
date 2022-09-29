




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



var navbar = document.querySelector(".navbar");
var contactLine = document.querySelector(".contact-line");



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
var navbar = document.querySelector(".navbar");
var navbarHeight = navbar.getBoundingClientRect().height;
var logo = document.querySelector(".navbar-brand img");
var projectName = document.querySelector(".projectName");
console.log(navbarHeight);

window.addEventListener("scroll", function(){
  var windowWidth =  window.innerWidth;
  // console.log(windowWidth);
 var windowHeight = window.pageYOffset;
if(windowHeight > contactLineheight){
  topContactLine.classList.add("none");
   navbar.style.marginTop = "0px";
  // navbar.style.height = "126px";
  logo.style.height = "110px";
  logo.style.width = "152px";
  // projectName.style.marginTop = "225px";
}else{
  topContactLine.classList.remove("none");
   navbar.style.marginTop = "40px";
  // navbar.style.height = "191px";
  if(windowWidth<= 991){
    logo.style.height = "174px";
    logo.style.width = "241px";
  }

  else{
    
  }
 
}

});




// getting current year

var year = document.querySelector(".currentYear");

var displayYear = new Date().getFullYear();
year.innerHTML = displayYear;
// console.log(displayYear);

