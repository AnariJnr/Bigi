//typed js

var typed = new Typed('.typed-about', {
  /**
   * @property {array} strings strings to be typed
   * @property {string} stringsElement ID of element containing string children
   */
  strings: [
    'These are the default values...',
   ` I create pixel designs for new construction projects,
   alterations and redevelopments,
   With my specialist construction knowledge and high-level drawing skills, 
   I design buildings that are functional, safe,
   sustainable and aesthetically pleasing, taking into account constraints such as town planning legislation, environmental impacts and project budgets.
`,
    // 'Use your own!',
    // 'Have a great day!'
  ],
  stringsElement: null,

  /**
   * @property {number} typeSpeed type speed in milliseconds
   */
  typeSpeed: 25,

  /**
   * @property {number} startDelay time before typing starts in milliseconds
   */
  startDelay: 0,

  /**
   * @property {number} backSpeed backspacing speed in milliseconds
   */
  backSpeed: 0,

  /**
   * @property {boolean} smartBackspace only backspace what doesn't match the previous string
   */
  smartBackspace: true,

  /**
   * @property {boolean} shuffle shuffle the strings
   */
  shuffle: false,

  /**
   * @property {number} backDelay time before backspacing in milliseconds
   */
  backDelay: 700,

  /**
   * @property {boolean} fadeOut Fade out instead of backspace
   * @property {string} fadeOutClass css class for fade animation
   * @property {boolean} fadeOutDelay Fade out delay in milliseconds
   */
  fadeOut: false,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,

  /**
   * @property {boolean} loop loop strings
   * @property {number} loopCount amount of loops
   */
  loop: false,
  loopCount: Infinity,

  /**
   * @property {boolean} showCursor show cursor
   * @property {string} cursorChar character for cursor
   * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
   */
  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true,

  /**
   * @property {string} attr attribute for typing
   * Ex: input placeholder, value, or just HTML text
   */
  attr: null,

  /**
   * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
   */
  bindInputFocusEvents: false,

  /**
   * @property {string} contentType 'html' or 'null' for plaintext
   */
  contentType: 'html'
});


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

