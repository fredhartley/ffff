window.addEventListener("DOMContentLoaded", function() {

    let faqCardsSum = document.querySelectorAll(".FAQ-card-summary");
    faqCardsSum.forEach(function(card) {
        let faqCardIcon = card.querySelector(".FAQ-card-icon");
        card.addEventListener("click", function() {
            faqCardIcon.textContent = faqCardIcon.textContent === "+" ? "-" : "+";
        });
    });
});

// details.addEventListener("toggle", (event) => {
//     if (details.open) {
//         faqCardIcon.textContent = "-";
//       /* the element was toggled open */
//     } else {
//         faqCardIcon.textContent = "";
//       /* the element was toggled closed */
//     }
//   });

// window.addEventListener("DOMContentLoaded", function() {
//     let faqCardContents = document.querySelectorAll(".FAQ-card-content");

//     faqCardContents.forEach(function(content) {
//         content.style.display = "none";
//     });

//     let faqCards = document.querySelectorAll(".FAQ-card");
//     faqCards.forEach(function(card) {
//         let faqCardIcon = card.querySelector(".FAQ-card-icon");
//         card.addEventListener("click", function() {
//             faqCardIcon.textContent = faqCardIcon.textContent === "+" ? "-" : "+";
//             let content = this.nextElementSibling; // Change this line
//             card.classList.toggle("active");
//             content.style.display = content.style.display === "none" ? "block" : "none";
//         });
//     });
// });


// window.addEventListener("DOMContentLoaded", function() {
//     let faqCardContents = document.querySelectorAll(".FAQ-card-content");

//     faqCardContents.forEach(function(content) {
//         content.style.display = "none";
//     });

//     let faqCards = document.querySelectorAll(".FAQ-card");
//     faqCards.forEach(function(card) {
//         let faqCardIcon = card.querySelector(".FAQ-card-icon");
//         card.addEventListener("click", function() {
//             faqCardIcon.textContent = faqCardIcon.textContent === "+" ? "-" : "+";
//             let content = this.nextElementSibling;
//             let targetDiv = document.querySelector(".FAQ-card-content"); // Replace ".your-class-name" with your specific class name
//             card.classList.toggle("active");
//             content.style.display = content.style.display === "none" ? "block" : "none";
//         });
//     });
// });
