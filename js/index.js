// Grab the card and the spot element inside it
const card = document.querySelector(".content");
const spot = card.querySelector(".spot");

// Update the spotlight position as the mouse moves inside the card
card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1) + "%";
    const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1) + "%";

    spot.style.setProperty("--x", x);
    spot.style.setProperty("--y", y);
});

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1) + "%";
        const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1) + "%";

        const spot = card.querySelector(".spot");
        spot.style.setProperty("--x", x);
        spot.style.setProperty("--y", y);
    });
});