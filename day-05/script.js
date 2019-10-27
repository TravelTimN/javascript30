document.addEventListener("DOMContentLoaded", function() {
    // select all panels
    const panels = document.querySelectorAll(".panel");

    // toggle "open" class
    function toggleOpen() {
        this.classList.toggle("open");
    }

    // toggle "open-active" class if transitionEnd contains flex ('flex' or 'flex-grow')
    function toggleActive(event) {
        if (event.propertyName.includes("flex")) {
            this.classList.toggle("open-active");
        }
    }

    // event listeners
    panels.forEach(panel => panel.addEventListener("click", toggleOpen));
    panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));
});