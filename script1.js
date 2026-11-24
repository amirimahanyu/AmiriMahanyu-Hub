
// ===================================
// AMIRMAHANYU HUB - JAVASCRIPT
// ===================================


// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("show");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// 2. COURSE CATEGORY FILTERING

const filterButtons = document.querySelectorAll(".filter-btn");
const courseCards = document.querySelectorAll(".course-card");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Remove active class from all buttons
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Activate selected button
        button.classList.add("active");

        // Get selected category
        const selectedCategory = button.dataset.filter;

        // Filter courses
        courseCards.forEach(function(card) {

            const cardCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                selectedCategory === cardCategory
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });

    });

});


// 3. JOIN BUTTON

const joinButton = document.getElementById("joinBtn");

joinButton.addEventListener("click", function() {

    alert(
        "Welcome to AmirMahanyu Hub!\n\n" +
        "Our learning journey is coming soon."
    );

});


// 4. AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// 5. CONSOLE MESSAGE

console.log("AmirMahanyu Hub frontend loaded successfully!");
console.log("Welcome to our Technology Academy!");
