// Unified spotlight handler — covers section cards and project cards
document.querySelectorAll(".section, .card").forEach(el => {
    const spot = el.querySelector(".spot");
    if (!spot) return; // skip if no spotlight element inside

    el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1) + "%";
        const y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1) + "%";
        spot.style.setProperty("--x", x);
        spot.style.setProperty("--y", y);
    });
});