// contact-line


var navbar = document.querySelector(".navbar");
var contactLine = document.querySelector(".contact-line");



// project section object Local Api

const project = [
  {
    id: 1,
    category: "residential",
    img: "projectpageimages/1 RESIDENTIAL/BLOCKOFFLATSJAHIABUJA.jpg",
    title: "BLOCK OF FLAT JAHI",
    location_1: "Jahi Abuja",
    location_2: "eachprojectpage/ResidentialProjectsPages/BlockOfFlatsProject/index.html",
    
  },

  {
    id: 2,
    category: "residential",
    img: "projectpageimages/1 RESIDENTIAL/FIVE BEDROOM BUNGALOW OWERRI (1).jpg",
    title: "BEDROOM BUNGALOW",
    location_1: "Owerri",
    location_2: "eachprojectpage/ResidentialProjectsPages/FiveBedroomBungalowProject/index.html",
  },

  {
    id: 3,
    category: "residential",
    img: "projectpageimages/1 RESIDENTIAL/LUXURY DUPLEX GUDU ABUJA (1).jpg",
    title: "LUXURY DUPLEX",
    location_1: "Gudu, Abuja",
    location_2: "eachprojectpage/ResidentialProjectsPages/Luxury Duplex/index.html",
  },

  {
    id: 4,
    category: "residential",
    img: "projectpageimages/1 RESIDENTIAL/LUXURY VICTORIAN DUPLEX, AGBALA IMO STATE (1).jpg",
    title: "LUXURY VICTORIAN DUPLEX",
    location_1: "Agbala Imo State",
    location_2: "eachprojectpage/ResidentialProjectsPages/LuxuryVictorianDuplex/index.html",
  },

  {
    id: 5,
    category: "residential",
    img: "projectpageimages/1 RESIDENTIAL/PRIVATE RESORT CALABAR (5).jpg",
    title: "PRIVATE RESORT",
    location_1: "Calabar, Cross River",
    location_2: "eachprojectpage/ResidentialProjectsPages/PrivateResortCalabar/index.html",
  },

  {
    id: 6,
    category: "residential",
    img: "projectpageimages/1 RESIDENTIAL/RETIREMENT HOME, FCT, ABUJA (2).jpg",
    title: "RETIREMENT HOME",
    location_1: "FCT, Abuja",
    location_2: "eachprojectpage/ResidentialProjectsPages/RetirementHome/index.html",
  },

  {
    id: 7,
    category: "residential",
    img: "projectpageimages/1 RESIDENTIAL/SEMI DETACHED DUPLEXES GWARIMPA, ABUJA (1).jpg",
    title: "SEMI DETACHED DUPLEXE",
    location_1: "Gwarimpa, Abuja",
    location_2: "eachprojectpage/ResidentialProjectsPages/SemiDetachedDuplex/index.html",
  },

  {
    id: 8,
    category: "residential",
    img: "projectpageimages/1 RESIDENTIAL/SEMI DETACHED KUBWA ABUJA (1).jpg",
    title: "SEMI DETACHED DUPLEXE KUBWA",
    location_1: "Kubwa, Abuja",
    location_2: "eachprojectpage/ResidentialProjectsPages/SemiDetachedDuplex II/index.html",
  },

  {
    id: 9,
    category: "residential",
    img: "projectpageimages/1 RESIDENTIAL/TERRACE ABUJA (1).jpg",
    title: "TERRANCE",
    location_1: "FCT, Abuja",
    location_2: "eachprojectpage/ResidentialProjectsPages/TeranceAbuja/index.html",
  },

  {
    id: 10,
    category: "residential",
    img: "projectpageimages/1 RESIDENTIAL/THREE BEDROOM BUNGALOW KANO (3).jpg",
    title: "THREE BEDROOM BUNGALOW",
    location_1: "Kano",
    location_2: "eachprojectpage/ResidentialProjectsPages/ThreeBedroomBungalow/index.html",
  },

  {
    id: 11,
    category: "commercial",
    img: "projectpageimages/2 COMMERCIAL/BON HOTELS TYPE 1, WUSE II, ABUJA (2).jpg",
    title: "BON HOTELS TYPE 1",
    location_1: "Wuse II, Abuja",
    location_2: "eachprojectpage/CommercialProjectPages/BonHotelsproject/index.html",
  },

  {
    id: 12,
    category: "commercial",
    img: "projectpageimages/2 COMMERCIAL/BON HOTELS TYPE 2, WUSE II, ABUJA (3).jpg",
    title: "BON HOTELS TYPE 2",
    location_1: "Wuse II, Abuja",
    location_2: "eachprojectpage/CommercialProjectPages/BonHotelsType2/index.html",
  },

  {
    id: 13,
    category: "commercial",
    img: "projectpageimages/2 COMMERCIAL/EXT akwa ibom market (2).jpg",
    title: "AKWA IBOM MARKET",
    location_1: "Akwa Ibom",
    location_2: "eachprojectpage/CommercialProjectPages/AkwaibomMarketProject/index.html",
  },

  {
    id: 14,
    category: "commercial",
    img: "projectpageimages/2 COMMERCIAL/FIRS COMPLEX, ILORIN (1).jpg",
    title: "FIRS COMPLEX",
    location_1: "Ilorin",
    location_2: "eachprojectpage/CommercialProjectPages/FrisComplexProject/index.html",
  },

  {
    id: 15,
    category: "commercial",
    img: "projectpageimages/2 COMMERCIAL/HOUSE 43 RESTAURANT & LOUNGE ABUJA (1).jpg",
    title: "HOUSE 43 RESTAURANT & LOUNGE",
    location_1: "FCT, Abuja",
    location_2: "eachprojectpage/CommercialProjectPages/House43Restaurant/index.html",
  },

  {
    id: 16,
    category: "commercial",
    img: "projectpageimages/2 COMMERCIAL/SHOPPING COMPLEX PROPOSAL (1).jpg",
    title: "SHOPPING COMPLEX PROPOSAL",
    location_1: "Nill",
    location_2: "eachprojectpage/CommercialProjectPages/ShopingComplex/index.html",
  },

  {
    id: 17,
    category: "commercial",
    img: "projectpageimages/2 COMMERCIAL/SIMS NIG SHOWROOM WUSE II ABUJA (2).jpg",
    title: "SIMS NIG SHOWROOM",
    location_1: "Wuse II, Abuja",
    location_2: "eachprojectpage/CommercialProjectPages/SimsNigShowroom/index.html",
  },

  {
    id: 18,
    category: "highRise",
    img: "projectpageimages/3 HIGH RISE/ABSI VILLA HOUSING PROPOSAL ABUJA (1).jpg",
    title: "ABSI VILLA HOUSING PROPOSAL",
    location_1: "FCT, Abuja",
    location_2: "eachprojectpage/HighRisePages/AbisVillaHousing/index.html",
  },


  {
    id: 19,
    category: "highRise",
    img: "projectpageimages/3 HIGH RISE/CHATERED MEDIATORS AND CONCILIATORS LUGBE, ABUJA (1).jpg",
    title: "CHATERED MEDIATORS AND CONCILIATORS",
    location_1: "Lugbe, Abuja",
    location_2: "eachprojectpage/HighRisePages/ChateredMediators/index.html",
  },


  {
    id: 20,
    category: "highRise",
    img: "projectpageimages/3 HIGH RISE/MERRYBELLS TOWER LIFECAMP ABUJA (1).jpg",
    title: "MERRYBELLS TOWER LIFECAMP",
    location_1: "FCT, Abuja",
    location_2: "eachprojectpage/HighRisePages/MerryBellsTower/index.html",
  },


  {
    id: 21,
    category: "masterPlan",
    img: "projectpageimages/4 MASTER PLANNING/MASTER PLAN FEDERAL UNIVERSITY OF HEALTH SCIENCE, OTUKPO, BENUE STATE (3).jpg",
    title: "FEDERAL UNIVERSITY OF HEALTH SCIENCE",
    location_1: "Otukpo, Benue",
    location_2: "eachprojectpage/MasterPlanningPages/FederalUniversityHealth/index.html",
  },

  {
    id: 22,
    category: "masterPlan",
    img: "projectpageimages/4 MASTER PLANNING/PALMVILLE ESTATE IDU, ABUJA (2).jpg",
    title: "PALMVILLE ESTATE IDU",
    location_1: "FCT, Abuja",
    location_2: "eachprojectpage/MasterPlanningPages/PlamVilleEstate/index.html",
  },

  {
    id: 23,
    category: "academic",
    img: "projectpageimages/6 ACADEMIC/ADMIN (2).jpg",
    title: "ADMIN",
    location_1: "Admin",
    location_2: "eachprojectpage/AcademicPages/Admin/index.html",
  },

  {
    id: 24,
    category: "academic",
    img: "projectpageimages/6 ACADEMIC/college of medicine (2).jpg",
    title: "college of medicine".toUpperCase(),
    location_1: "Nill",
    location_2: "eachprojectpage/AcademicPages/CollegeOfMedicine/index.html",
  },

  {
    id: 25,
    category: "academic",
    img: "projectpageimages/6 ACADEMIC/faculty alternative 2_3 - Photo.jpg",
    title: "faculty alternative".toUpperCase(),
    location_1: "Faculty",
    location_2: "eachprojectpage/AcademicPages/FacultyAlternative/index.html",
  },

  {
    id: 26,
    category: "academic",
    img: "projectpageimages/6 ACADEMIC/FACULTY OF MEDICINE VERITAS UNIVERSITY ABUJA (2).jpg",
    title: "FACULTY OF MEDICINE VERITAS UNIVERSITY",
    location_1: "FCT, Abuja",
    location_2: "eachprojectPage/AcademicPages/FacultyOfMedicine/index.html",
  },

  {
    id: 27,
    category: "academic",
    img: "projectpageimages/6 ACADEMIC/TRINITY BOYS' COLLEGE, WASA, ABUJA (4).jpg",
    title: "TRINITY BOYS' COLLEGE",
    location_1: "Wasa, Abuja",
    location_2: "eachprojectpage/AcademicPages/TrinityBoysCollege/index.html",
  },
  
  {
    id: 28,
    category: "religious",
    img: "projectpageimages/7 RELIGIOUS/CATHOLIC SECRETARIAT OF NIGERIA CHAPEL, DURUMI, ABUJA (3).jpg",
    title: "CATHOLIC SECRETARIAT OF NIGERIA CHAPEL",
    location_1: "Durumi, Abuja",
    location_2: "Durumi, Abuja",
  },
  

  {
    id: 29,
    category: "religious",
    img: "projectpageimages/7 RELIGIOUS/ST MARK'S CATHOLIC CHURCH GADUWA (1).jpg",
    title: "ST MARK'S CATHOLIC CHURCH",
    location_1: "Gaduwa, Abuja",
    location_2: "Gaduwa, Abuja",
  },

  {
    id: 30,
    category: "interior",
    img: "projectpageimages/8 INTERIORS/BENZ SHOWROOM (1).jpg",
    title: "BENZ SHOWROOM",
    location_1: "Benz Show Room",
    location_2: "eachprojectpage/InteriorsPages/BenzShowroom/index.html",
  },

  {
    id: 31,
    category: "interior",
    img: "projectpageimages/8 INTERIORS/KITCHEN PROPOSALS (3).jpg",
    title: "KITCHEN PROPOSALS",
    location_1: "Kitchen Proposal",
    location_2: "eachprojectpage/InteriorsPages/KitchenProposal/index.html",
  },

  {
    id: 32,
    category: "interior",
    img: "projectpageimages/8 INTERIORS/NIGERIAN CORRECTIONAL SERVICES LUGBE, ABUJA (3).jpg",
    title: "NIGERIAN CORRECTIONAL SERVICES",
    location_1: "Lugbe, Abuja",
    location_2: "eachprojectpage/InteriorsPages/NigerianCorrectionalServices/index.html",
  },

  {
    id: 33,
    category: "interior",
    img: "projectpageimages/8 INTERIORS/OFFICE INTERIOR KATAMPE, ABUJA (3).jpg",
    title: "OFFICE INTERIOR",
    location_1: "Katampe, Abuja",
    location_2: "eachprojectpage/InteriorsPages/Officeinterior/index.html",
  },

  {
    id: 34,
    category: "interior",
    img: "projectpageimages/8 INTERIORS/ROYAL AIR ABUJA (3).jpg",
    title: "ROYAL AIR",
    location_1: "FCT, Abuja",
    location_2: "eachprojectpage/InteriorsPages/RoyalAir/index.html",
  },

  {
    id: 35,
    category: "interior",
    img: "projectpageimages/8 INTERIORS/VILLA CHRIS INTERIORS (6).jpg",
    title: "VILLA CHRIS INTERIORS",
    location_1: "Villa Chris",
    location_2: "eachprojectpage/InteriorsPages/VillaChris/index.html",
  },

  {
    id: 36,
    category: "others",
    img: "projectpageimages/10 LOGOS of CLIENTS/TBC.JPG",
    title: "TBC LOGO",
    location_1: "TBC",
    location_2: "eachprojectpage/Others/TBCLogo/index.html",
  },

]


var rowMain = document.querySelector(".row");

var filter_btns = document.querySelectorAll(".btns_pro");

// load items

window.addEventListener("DOMContentLoaded",function(){
   displayProjectsItems(project);
});


// filter btns


filter_btns.forEach(function(btn){
  btn.addEventListener("click",function(e){
  
   const category = e.currentTarget.dataset.id;
   const projectCategory = project.filter(function(projectItem){
    //  console.log(projectItem.category);
    if(projectItem.category === category){  
    
      return projectItem;
    }
    
   });
   
   if(category ==="all"){
    rowMain.classList.remove("nonee");
    displayProjectsItems(project);
    
   }else if(category === "ontheboard"){
       rowMain.classList.add("nonee");
   }
   
   else{
    rowMain.classList.remove("nonee");
    displayProjectsItems(projectCategory);
   }
  //  console.log(projectCategory);
  });
});

// end of btns filter

function displayProjectsItems(projectList){
  var displayProjects = projectList.map(function(item){
    
    // console.log(item);
     
  return`      
    <div onclick="window.location.href='${item.location_2}';" class="pro col-lg-4 col-md-12 col-sm-12"> 
    <div class="image">
      <img src="${item.img}" class="image_img alpha" alt="">
     <div class="image_overlay">
     <a href="${item.location_2}"><i class="fa-solid fa-circle-plus"></i></a> 
      <br>
      <div class="image_title">
        <i class="fa-solid fa-location-dot"></i> ${item.location_1}
      </div>
     </div>
    </div>
    <div class="location">
      <p class="image_description">${item.title}</p>
      <i class="fa-solid fa-location-dot"></i> <span>${item.location_1}</span> 
    </div>
    </div>`;
   });

   displayProjects = displayProjects.join(" ");
   rowMain.innerHTML = displayProjects;
  //  console.log(displayProjects);
}

// scroll 

var topContactLine = document.querySelector(".contact-line");
var contactLineheight= topContactLine.getBoundingClientRect().height;
var navbar = document.querySelector(".navbar");
var navbarHeight = navbar.getBoundingClientRect().height;
var logo = document.querySelector(".navbar-brand img");
var projectName = document.querySelector(".projectName");
console.log(navbarHeight);

window.addEventListener("scroll", function(){
 var windowHeight = window.pageYOffset;
if(windowHeight > contactLineheight){
  topContactLine.classList.add("none");
   navbar.style.marginTop = "0px";
  // navbar.style.height = "126px";
  logo.style.height = "110px";
  logo.style.width = "152px";
  projectName.style.marginTop = "225px";
}else{
  topContactLine.classList.remove("none");
   navbar.style.marginTop = "40px";
  // navbar.style.height = "191px";
  logo.style.height = "174px";
  logo.style.width = "241px";
}

});




// getting current year

var year = document.querySelector(".currentYear");

var displayYear = new Date().getFullYear();
year.innerHTML = displayYear;
// console.log(displayYear);