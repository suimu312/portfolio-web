const mealsContainer = document.getElementById("meals");

mealsContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".project-card");
    if (!card) return;

    const url = card.getAttribute("data-url");
    if (url) {
        window.open(url, "_blank");
    }
});
