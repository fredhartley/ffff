window.addEventListener("DOMContentLoaded", function() {
    let faqCardContents = document.querySelectorAll(".FAQ-card-content");

    faqCardContents.forEach(function(content) {
        content.style.display = "none";
    });

    let faqCards = document.querySelectorAll(".FAQ-card");
    faqCards.forEach(function(card) {
        card.addEventListener("click", function() {
            let content = this.nextElementSibling;
            content.style.display = content.style.display === "none" ? "block" : "none";
        });
    });
});
