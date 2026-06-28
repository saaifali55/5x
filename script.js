document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(btn => {

        btn.addEventListener("touchstart", () => {
            btn.style.transform = "scale(0.95)";
        });

        btn.addEventListener("touchend", () => {
            btn.style.transform = "scale(1)";
        });

        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "translateY(-5px)";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "translateY(0)";
        });

    });

});
