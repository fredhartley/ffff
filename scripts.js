window.addEventListener("DOMContentLoaded", function() {
    let faqCardContents = document.querySelectorAll(".FAQ-card-content");

    faqCardContents.forEach(function(content) {
        content.style.display = "none";
    });

    let faqCards = document.querySelectorAll(".FAQ-card");
    faqCards.forEach(function(card) {
        let faqCardIcon = card.querySelector(".FAQ-card-icon");
        card.addEventListener("click", function() {
            faqCardIcon.textContent = faqCardIcon.textContent === "+" ? "-" : "+";
            let content = this.nextElementSibling;
            card.classList.toggle("active");
            content.style.display = content.style.display === "none" ? "block" : "none";
        });
    });
});
