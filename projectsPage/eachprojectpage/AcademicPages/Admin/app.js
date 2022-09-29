
// scroll 

var topContactLine = document.querySelector(".contact-line");
var contactLineheight= topContactLine.getBoundingClientRect().height;
var navbar = document.querySelector(".navbar");
var navbarHeight = navbar.getBoundingClientRect().height;
var logo = document.querySelector(".navbar-brand img");
var projectName = document.querySelector(".projectName");
var windowWidth =  window.innerWidth;
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
   navbar.style.marginTop = "50px";
  // navbar.style.height = "191px";
  if(windowWidth<= 991){
    logo.style.height = "174px";
    logo.style.width = "241px";
  }
  
}

});








// getting current year

var year = document.querySelector(".currentYear");

var displayYear = new Date().getFullYear();
year.innerHTML = displayYear;
// console.log(displayYear);

