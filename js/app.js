
/* Smooth Scroll to Section */
const service = document.getElementById("services");
const btnExplore = document.querySelector(".btn-explore");
const products = document.getElementById("products");
const businessSec= document.querySelector("#business")

/*scrolling of Btn*/
btnExplore.addEventListener("click",()=>{
    smoothScroll();
})
function smoothScroll(){
    document.querySelector('.ayhaga').scrollIntoView({
        behavior: 'smooth'
    });
}

/*Scrolling of Each Title*/
/*Services*/
service.addEventListener("click",()=>{
    serviceScroll();
})
function serviceScroll(){
    document.querySelector('.ayhaga').scrollIntoView({
        behavior: 'smooth'
    });
}




/*Sliding Up */ 

/*important */

/* const imageSlider= document.querySelector("#firstImgService");
const buttonSlider= document.querySelector("#img-learn-more")
imageSlider.addEventListener("mouseover",()=>{
    buttonSlider.classList.add("slider");
})
 */
/*Products*/ 
products.addEventListener("click",()=>{
    productsScroll();
})
function productsScroll(){
    document.querySelector('.tanyayhaga').scrollIntoView({
        behavior: 'smooth'
    });
}



/*Business*/ 
businessSec.addEventListener("click",()=>{
    businessScroll();
})
function businessScroll(){
    document.querySelector('.taletayhaga').scrollIntoView({
        behavior: 'smooth'
    });
}


/*Fixed Nav*/
/* 
const nav = document.querySelector(".navbar__menu")
const navTop = nav.offsetTop;

function stickNavigation(){
    if(window.scrollY >= navTop){
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add("fixed-nav");
    }
    else{ 
        document.body.style.paddingTop=0;
        document.body.classList.remove("fixed-nav");
    }
}
window.addEventListener("scroll", stickNavigation);
 */

/*Displaying a background for nav on scroll  */
var ahmed = document.querySelector(".ahmedsalah");
var about = document.querySelector("#a-about");
/* window.onscroll = function() {faouzia()}; *//* deleted for dubication {window.onscroll function already 
exists below} */

function faouzia(){
    if (document.body.scrollTop > 30 ||  document.documentElement.scrollTop > 30 ){
        ahmed.classList.add("navscroll");
       /*  ahmed.style.color = "black";
        about.style.color = "black"; */
    }
    else{
        ahmed.classList.remove("navscroll");
        /* ahmed.style.color = "white"
        about.style.color = "white" */
    }
    
}


/*animation services using intersection Observer API */

const serviceImages = document.querySelectorAll(".img1");
const optionsService={
    rootMargin:"10px"
};

const observerService = new IntersectionObserver(function(entries,observerService){
        entries.forEach(entry => {
            /*this line to check if the it is intersecting or not to prevent
             it from firing on page reload without intersecting 
             and the return means if condition is true  the funciton is out*/
            if(!entry.isIntersecting){

                entry.target.classList.remove("fadeInRight");
                
                
            }
            else{
                entry.target.classList.add("fadeInRight");
            }
            
            /* console.log(entry.target); */
        });
},optionsService);

serviceImages.forEach(serviceImage=>{
    observerService.observe(serviceImage)
}) 



/*animation products using intersection Observer API */



const images = document.querySelectorAll(".img2");
const options={
    rootMargin:"10px"
};

const observer = new IntersectionObserver(function(entries,observer){
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                entry.target.classList.remove("fadeInBtm");
                
            }
            else{
                entry.target.classList.add("fadeInBtm");
                /* console.log(entry.target); */

            }

            
        });
},options);

images.forEach(image=>{
    observer.observe(image)
}) 



//To the top button

ToTop = document.getElementById("buttonToTop");

//Show btn when scroll
window.onscroll = function() {scrollTillTheTop(), faouzia()};

function scrollTillTheTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    ToTop.style.display = "block";
  } else {
    ToTop.style.display = "none";
  }
}

//when click go to the top 
function toTheTop() {
  //For Chrome, Firefox, IE and Opera
  window.scrollTo({top: 0, behavior: 'smooth'});
}