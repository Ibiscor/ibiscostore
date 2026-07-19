console.log("IBISCO Loaded");

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index){

    // എല്ലാ slides hide ചെയ്യുന്നു
    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    // എല്ലാ dots inactive ആക്കുന്നു
    dots.forEach(dot=>{
        dot.classList.remove("active");
    });

    // Current slide show ചെയ്യുന്നു
    slides[index].classList.add("active");

    // Current dot highlight ചെയ്യുന്നു
    dots[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

// ഓരോ dot-ലും click support
dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        currentSlide = index;

        showSlide(currentSlide);

    });

});

// ആദ്യം first slide കാണിക്കുന്നു
showSlide(currentSlide);

// ഓരോ 4 seconds-നും slide മാറും
setInterval(nextSlide,4000);