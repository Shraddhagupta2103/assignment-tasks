document.addEventListener("DOMContentLoaded", () => {
    const leftMenu = document.getElementById("left-menu");
    const toggleMenu = document.getElementById("toggle-menu");

    // Toggle left menu visibility
    toggleMenu.addEventListener("click", () => {
        leftMenu.classList.toggle("collapsed");
    });

    // Adjust page scaling based on screen width
    function adjustPageScale() {
        const width = window.innerWidth;
        let scale = 1;

        if (width <= 600) {
            scale = 0.5;
        } else if (width > 600 && width <= 700) {
            scale = 0.75;
        } else if (width > 700 && width <= 767) {
            scale = 0.8;
        } else if (width > 992 && width <= 1600) {
            scale = 0.9;
        }

        document.body.style.transform = scale(${scale});
        document.body.style.transformOrigin = "top left";
    }

    // Attach resize event listener
    window.addEventListener("resize", adjustPageScale);

    // Initial adjustment
    adjustPageScale();
});