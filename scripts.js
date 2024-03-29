window.addEventListener("DOMContentLoaded", function() {

    let faqCardsSum = document.querySelectorAll(".FAQ-card-question__container");
    faqCardsSum.forEach(function(card) {
        let faqCardIcon = card.querySelector(".FAQ-card-icon");
        card.addEventListener("click", function() {
            faqCardIcon.textContent = faqCardIcon.textContent === "+" ? "-" : "+";
        });
    });

    let faqCardDets = document.querySelectorAll(".FAQ-card");
    faqCardDets.forEach(function(card) { 
        card.addEventListener("toggle", () => {
            card.style.backgroundColor = card.open ? "#c3c9ff" : "#E0E2F3";
        });
    });
});