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

// =========================================
// Get Product ID From URL
// =========================================

// Example:
// product-details.html?id=tshirt

const urlParams = new URLSearchParams(window.location.search);

const productId = urlParams.get("id");

// Find matching product

const product = products.find(item => item.id === productId);

// If no product found

if (!product) {

    alert("Product Not Found");

    window.location.href = "men.html";

}

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


// Material
document.getElementById("product-material").textContent = product.material;

// Fit
document.getElementById("product-fit").textContent = product.fit;

// Neck
document.getElementById("product-neck").textContent = product.neck;

// Sleeve
document.getElementById("product-sleeve").textContent = product.sleeve;

// Wash Care
document.getElementById("product-wash").textContent = product.wash;

// Product Rating
document.getElementById("product-rating").textContent =
product.rating + " / 5";

// Product Discount
document.getElementById("product-discount").textContent =
"Save " + product.discount + "%";

// =========================================
// Product Stock Status
// =========================================

const stockStatus = document.getElementById("product-stock-status");

if (product.stock > 10) {

    stockStatus.textContent =
    "✅ In Stock (" + product.stock + " Available)";

}

else if (product.stock > 0) {

    stockStatus.textContent =
    "⚠️ Only " + product.stock + " Left";

}

else {

    stockStatus.textContent =
    "❌ Out of Stock";

}

// =========================================
// Size Selection
// =========================================

const sizeButtons = document.querySelectorAll(".size-btn");

const selectedSize = document.getElementById("selected-size");

sizeButtons.forEach(button => {

    button.addEventListener("click", () => {

        sizeButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        selectedSize.textContent =
        "Selected Size : " + button.textContent;

    });

});

// Default Selected Size

sizeButtons[1].classList.add("active");