console.log("IBISCO Loaded");

/* ==========================
   HERO SLIDER
========================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

if (slides.length > 0 && dots.length > 0) {

    let currentSlide = 0;

    function showSlide(index) {

        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        dots.forEach(dot => {
            dot.classList.remove("active");
        });

        slides[index].classList.add("active");
        dots[index].classList.add("active");
    }

    function nextSlide() {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);
    }

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            currentSlide = index;

            showSlide(currentSlide);

        });

    });

    showSlide(currentSlide);

    setInterval(nextSlide, 4000);

}


/* ==========================
   PRODUCT FILTER
========================== */

const filters = document.querySelectorAll('.filter-sidebar input[type="radio"]');
const productCards = document.querySelectorAll(".product-link");

if (filters.length > 0 && productCards.length > 0) {

   filters.forEach(filter => {

    filter.addEventListener("change", function () {

        const value = this.value;

        productCards.forEach(product => {

            const category = product.querySelector(".product-card").dataset.category;

            if (value === "all" || category === value) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

});

}

// =========================================
// Dynamic Product Loader
// =========================================

// Load first product from products.js

const product = products[0];

// Product Name
document.getElementById("product-name").textContent = product.name;

// Collection
document.getElementById("product-collection").textContent = product.collection;

// Prices
document.getElementById("new-price").textContent = "₹" + product.price;

document.getElementById("old-price").textContent = "₹" + product.oldPrice;

// Description
document.getElementById("product-description").textContent = product.description;

// Main Image
document.getElementById("main-image").src = product.images[0];